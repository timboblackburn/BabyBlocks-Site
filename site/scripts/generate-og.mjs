/**
 * BabyBlocks OG card generator.
 *
 * Run with: pnpm/npm run og  (after adding "og": "node scripts/generate-og.mjs"
 * to package.json scripts).
 *
 * Outputs:
 *   - public/og-image.png        (default 1200x630 card)
 *   - public/og/budgetbaby.png   (per-page card)
 *   - public/og/about.png
 *   - public/og/coming-soon.png
 *
 * Uses sharp (transitive Astro dep). Pure SVG -> PNG, no fonts to bundle.
 */
import sharp from 'sharp';
import { mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');
mkdirSync(resolve(root, 'public/og'), { recursive: true });

function ogSvg({ eyebrow, title1, title2, subtitle }) {
  const escape = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFF7EF" />
      <stop offset="100%" stop-color="#FBEFE3" />
    </linearGradient>
    <radialGradient id="glow1" cx="92%" cy="6%" r="70%">
      <stop offset="0%" stop-color="#FFB8C7" stop-opacity="0.55" />
      <stop offset="100%" stop-color="#FFB8C7" stop-opacity="0" />
    </radialGradient>
    <radialGradient id="glow2" cx="-4%" cy="92%" r="55%">
      <stop offset="0%" stop-color="#FFD9BF" stop-opacity="0.55" />
      <stop offset="100%" stop-color="#FFD9BF" stop-opacity="0" />
    </radialGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="1200" height="630" fill="url(#glow1)"/>
  <rect width="1200" height="630" fill="url(#glow2)"/>
  <rect x="32" y="32" width="1136" height="566" fill="none" stroke="rgba(21,17,13,0.10)" stroke-width="1"/>

  <g transform="translate(72,96)">
    <circle cx="-2" cy="6" r="6" fill="#F25E72" />
    <text x="22" y="9" font-family="'Helvetica Neue', Arial, sans-serif"
      font-size="20" font-weight="700" letter-spacing="6" fill="#D94A60">
      ${escape(eyebrow.toUpperCase())}
    </text>
  </g>

  <text x="72" y="280" font-family="Georgia, 'Times New Roman', serif"
    font-size="86" font-weight="500" fill="#15110D" letter-spacing="-3">
    ${escape(title1)}
  </text>
  ${title2 ? `<text x="72" y="380" font-family="Georgia, 'Times New Roman', serif"
    font-size="86" font-weight="500" fill="#15110D" letter-spacing="-3">${escape(title2)}</text>` : ''}

  ${subtitle ? `<text x="72" y="${title2 ? 455 : 365}"
    font-family="'Helvetica Neue', Arial, sans-serif"
    font-size="26" font-weight="400" fill="rgba(21,17,13,0.66)">
    ${escape(subtitle)}
  </text>` : ''}

  <line x1="72" y1="510" x2="240" y2="510" stroke="#F25E72" stroke-width="2"/>

  <text x="72" y="555" font-family="Georgia, 'Times New Roman', serif"
    font-size="26" font-weight="500" fill="#15110D" letter-spacing="-0.6">
    BabyBlocks
  </text>

  <text x="1128" y="555" text-anchor="end"
    font-family="'Helvetica Neue', Arial, sans-serif"
    font-size="18" font-weight="600" fill="rgba(21,17,13,0.55)" letter-spacing="4">
    BABYBLOCKS.IO
  </text>
</svg>`;
}

const cards = [
  {
    out: 'public/og-image.png',
    eyebrow: 'BabyBlocks',
    title1: 'Can you actually',
    title2: 'afford that today?',
    subtitle: 'BudgetBaby works it out for you. One number on the home screen, every day.',
  },
  {
    out: 'public/og/budgetbaby.png',
    eyebrow: 'BudgetBaby',
    title1: 'Know what is safe',
    title2: 'to spend today.',
    subtitle: 'iPhone budgeting that does not connect to your bank.',
  },
  {
    out: 'public/og/about.png',
    eyebrow: 'About',
    title1: 'An independent',
    title2: 'iOS app studio.',
    subtitle: 'One person. A small group of contractors. No outside investors.',
  },
  {
    out: 'public/og/coming-soon.png',
    eyebrow: "What's next",
    title1: 'A couple of',
    title2: 'apps in the works.',
    subtitle: 'PantryBaby is in development. BabyBlocks Core is at the idea stage.',
  },
];

for (const c of cards) {
  const svg = ogSvg(c);
  const outputPath = resolve(root, c.out);
  await sharp(Buffer.from(svg)).png({ quality: 92 }).toFile(outputPath);
  console.log(`OK ${c.out}`);
}
console.log(`\nGenerated ${cards.length} OG cards.`);
