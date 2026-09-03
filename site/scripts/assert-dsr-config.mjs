#!/usr/bin/env node
/**
 * Build gate for the public Data Subject Request form (BUG L-1 / L-1b).
 *
 * WHAT WENT WRONG
 * ---------------
 * `PUBLIC_CRM_BASE_URL` was defined nowhere, so `data-request.astro` rendered
 * with `dsrUrl = ""`. The page shipped anyway, and a customer exercising a
 * GDPR/CCPA right was shown "Thanks. We got it" while nothing was recorded
 * anywhere. The privacy policy names that form as THE way to exercise those
 * rights and promises a 30-day response.
 *
 * WHAT THIS GATE DOES
 * -------------------
 * If the data-request page still contains a submitting form, the build FAILS
 * unless `PUBLIC_CRM_BASE_URL` is defined and is a valid absolute https URL.
 * That makes the owner's choice explicit and enforceable:
 *
 *   Option A — keep the form  → define the variable, or you cannot build.
 *   Option B — take it down   → remove the form; this gate then passes.
 *
 * There is deliberately NO escape hatch. An escape hatch is how the empty
 * value reached production the first time.
 *
 * WHERE TO SET THE VARIABLE
 * -------------------------
 * Cloudflare Pages → the BabyBlocks site project → Settings → Environment
 * variables. Add `PUBLIC_CRM_BASE_URL` to BOTH the Production and Preview
 * environments (a Preview-only value silently leaves production broken), then
 * redeploy. Locally, put it in `site/.env` (git-ignored).
 *
 * The value is the CRM origin only, no path and no trailing slash, e.g.
 *   PUBLIC_CRM_BASE_URL=https://api.babyblocks.io
 * The page appends `/api/compliance/babyblocks/dsr-submit` itself.
 *
 * NOTE (verified 2026-09-02): even with this set, the backend route
 * `/api/compliance/babyblocks/dsr-submit` does not exist yet and returns 404.
 * The page then reports an honest failure and points at the email path — which
 * is the point. This gate makes the page TRUTHFUL; it does not make online DSR
 * work. That needs the backend route.
 */

import { readFileSync, existsSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDir = dirname(fileURLToPath(import.meta.url));
const siteRoot = resolve(scriptDir, '..');
const PAGE = resolve(siteRoot, 'src/pages/data-request.astro');
const VAR = 'PUBLIC_CRM_BASE_URL';

/** Read `KEY=value` pairs out of a dotenv file, ignoring comments. */
function readDotenv(file) {
  if (!existsSync(file)) return {};
  const out = {};
  for (const rawLine of readFileSync(file, 'utf8').split('\n')) {
    const line = rawLine.trim();
    if (!line || line.startsWith('#')) continue;
    const eq = line.indexOf('=');
    if (eq === -1) continue;
    const key = line.slice(0, eq).trim();
    let value = line.slice(eq + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    out[key] = value;
  }
  return out;
}

function fail(lines) {
  console.error('\n\x1b[31m' + '='.repeat(72) + '\x1b[0m');
  console.error('\x1b[31mBUILD BLOCKED — data-request form is not safe to ship\x1b[0m');
  console.error('\x1b[31m' + '='.repeat(72) + '\x1b[0m');
  for (const line of lines) console.error(line);
  console.error('');
  process.exit(1);
}

if (!existsSync(PAGE)) {
  // The page is gone entirely. Nothing to guard.
  process.exit(0);
}

const pageSource = readFileSync(PAGE, 'utf8');

/**
 * Strip comments so a page that merely *documents* the endpoint (as the
 * taken-down version does) is not mistaken for one that submits to it.
 * Line comments are only stripped when they start the line, so URLs like
 * https://example.com survive.
 */
function stripComments(source) {
  return source
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .split('\n')
    .filter((line) => !line.trim().startsWith('//'))
    .join('\n');
}

const code = stripComments(pageSource);

// Fail closed: EITHER a live form element OR live code reading the variable is
// enough to require it. Only a page with neither is exempt.
const hasForm = code.includes('id="dsr-form"');
const hasSubmitEndpoint = code.includes('/dsr-submit') || code.includes(`env.${VAR}`);

if (!hasForm && !hasSubmitEndpoint) {
  console.log(
    `[assert-dsr-config] data-request.astro ships no submitting form — ${VAR} not required.`
  );
  process.exit(0);
}

// Cloudflare Pages exposes build-time variables through the environment.
// Locally, Astro also reads .env files, so check those too.
const dotenv = {
  ...readDotenv(resolve(siteRoot, '.env')),
  ...readDotenv(resolve(siteRoot, '.env.production')),
  ...readDotenv(resolve(siteRoot, '.env.local')),
};
const value = (process.env[VAR] ?? dotenv[VAR] ?? '').trim();

if (!value) {
  fail([
    `  ${VAR} is not defined, so data-request.astro would render with an`,
    '  empty submit target. The form would accept a customer\'s GDPR/CCPA request',
    '  and record it nowhere.',
    '',
    '  Fix it one of two ways:',
    '',
    `    A. Define ${VAR} in Cloudflare Pages → this project →`,
    '       Settings → Environment variables → BOTH Production and Preview,',
    '       e.g. https://api.babyblocks.io  (origin only, no path, no trailing slash)',
    '       Locally: add it to site/.env',
    '',
    '    B. Take the form down — replace the form on src/pages/data-request.astro',
    '       with the email-only path. This gate then passes.',
  ]);
}

let parsed;
try {
  parsed = new URL(value);
} catch {
  fail([`  ${VAR} is set to "${value}", which is not a valid absolute URL.`,
        '  Expected an origin such as https://api.babyblocks.io']);
}

if (parsed.protocol !== 'https:') {
  fail([`  ${VAR} must use https. Got "${parsed.protocol}//".`]);
}

if (parsed.pathname !== '/' && parsed.pathname !== '') {
  fail([
    `  ${VAR} must be an origin only — the page appends`,
    '  /api/compliance/babyblocks/dsr-submit itself.',
    `  Got path "${parsed.pathname}". Remove it.`,
  ]);
}

// OWNER RULING 2026-09-02: the BabyBlocks domain is babyblocks.io and nothing
// else. A DSR endpoint on any other BabyBlocks hostname is a bug, not a domain
// to register.
const host = parsed.hostname.toLowerCase();
const isBabyBlocksHost = /(^|\.)babyblocks\./.test(host);
if (isBabyBlocksHost && !(host === 'babyblocks.io' || host.endsWith('.babyblocks.io'))) {
  fail([
    `  ${VAR} points at "${host}".`,
    '  The BabyBlocks domain is babyblocks.io ONLY. Any other BabyBlocks hostname',
    '  is a bug to fix, never a domain to register.',
  ]);
}

console.log(`[assert-dsr-config] OK — ${VAR}=${parsed.origin}`);
