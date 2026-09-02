# Product Marketing Context — babyblocks.io

Auto-drafted from the codebase as grounding context for copywriting, copy-editing,
CRO, SEO, and schema work. Everything here is drawn from existing site content and
data files. Do not add facts that are not already established on the site.

## What this is

babyblocks.io is the marketing site for BabyBlocks, an independent iOS app studio.
The studio ships focused apps for family life, each built to answer one specific
daily question. The site is built with Astro 5.x (static, no SSR) and deployed as a
Cloudflare Worker serving static assets.

## Product family

| App | Status | One job |
|-----|--------|---------|
| BudgetBaby | Live on the US App Store | "What is safe to spend today?" |
| PantryBaby | In build (waitlist) | "What do I have, and what do I need at the store?" |
| BabyBlocks Core | Idea stage (waitlist) | A shared home for the apps. Not yet being coded. |

The lead product is BudgetBaby. PantryBaby and BabyBlocks Core are secondary and
honestly labeled as not yet available.

## BudgetBaby (the hero product)

- iOS budgeting app. iPhone, iOS 17 and up. Built in Swift and SwiftData.
- App Store: https://apps.apple.com/us/app/budgetbaby-safe-to-spend/id6764697339
  (canonical constant: `BUDGETBABY_APP_STORE_URL` in `src/data/appStore.ts`).
- Core idea: one "Safe to Spend" number on the home screen that already accounts
  for upcoming bills, savings reserve, and what has been spent. Green means go,
  red means hold off.
- Calculation (stated on the features page): (Remaining Budget − Unpaid Bills −
  Savings Reserve) ÷ Days Remaining.
- Key features: Safe to Spend, Money Pools (Cash / Card / Savings), Priority
  Categories, Custom Categories, Recurring Bills, Subscription Tracking, Savings
  Goals and Transfers, Monthly Archive, Analytics and Insights with drill-downs,
  Receipt Attachments, Calendar View, Reminders, encrypted iCloud backup.
- No bank connection. The user enters what they spend. This is a deliberate design
  choice and a core selling point, not a limitation to hide.

### Pricing (already stated on the site — do not change the numbers)

- Free tier is a real app, not a demo. Includes Safe to Spend, unlimited
  transactions, Money Pools, Priority Categories, 5 custom categories, 3 savings
  goals, 3 recurring bills, 3 subscriptions, 1 CSV export per month, 1 backup slot,
  receipt attachments, and category drill-downs.
- Premium: $7.99 / month or $69.99 / year (about 27% saving annually). Annual
  includes a 7-day free trial. Premium removes the free-tier limits and adds
  calendar sync, monthly reports, PDF exports, advanced insights and trends, and up
  to 5 backup slots. Manage and cancel in iOS Settings.
- Pricing is per app. BudgetBaby and PantryBaby Premium are priced identically.

## Audience

Busy households and parents who want to budget with confidence without linking a
bank account. People who find mainstream budgeting apps either too historical
("here is what you already spent") or too invasive (bank connections, data
harvesting). They value privacy, speed, and a single clear answer over dashboards.

## Positioning

A privacy-first, local-first budgeting app that answers one question — what is safe
to spend today — instead of dumping charts on you. Manual entry by design, which is
why the numbers match the real account balance. One job, done well.

## Differentiators (all already on the site)

- One actionable daily number, not a backward-looking report.
- No bank connection. Data stays on the device by default; iCloud backup is opt-in
  and encrypted on the phone before it leaves.
- No ads, no data sales. Revenue is subscriptions only.
- Free tier is a fully working app.
- Independent studio, no outside investors.

## Voice and tone

- Plain, direct, confident. Short sentences. Speaks to "you".
- Honest over hype. States limits plainly (no bank connection, manual entry,
  iPhone-only) and treats them as features.
- Warm but not cute. Occasional light touch ("back to your day before the baby
  notices") but never at the expense of clarity.

## Hard brand constraints (must follow)

1. No em dashes anywhere. Use periods, commas, or restructure.
2. No emoji in UI copy. Use inline SVG icons via `Icon.astro` (Lucide set) instead.
3. No overclaiming on security, privacy, or freshness. Keep honest limitations
   honest.
4. No fabricated facts. No invented user counts, testimonials, ratings, awards,
   press, or "join N users" social proof. Only use facts already on the site.
5. Never state headcount. Never write "one person", "solo", "team of one", "I
   built", or first-person-singular maker claims. Use the royal "we". Vague honest
   framing is fine: "independent", "small studio", "under Intrigue MMC LLC", "no
   outside investors", "no ads". Naming Tim Blackburn or the LLC as owner on a
   founder or legal page is acceptable (identity, not headcount).
6. Preserve all legal, privacy, and terms factual content. Do not weaken accurate
   disclosures.

## Company / lineage

Built and published by Intriguing Insight, an independent studio under Intrigue MMC
LLC, based in Illinois. No outside investors, no board, no ads. Support is via
support@babyblocks.io. Part of a four-site family (intriguemmc.com,
intriguinginsight.com, babyblocks.io, foundry-os.io) that shares a status data file
and an editorial Fraunces + Inter type pairing.

## Primary conversion goal

Drive App Store downloads of BudgetBaby. The single primary CTA across BudgetBaby
pages is "Download on the App Store" pointing at `BUDGETBABY_APP_STORE_URL`.
Secondary CTAs (How it works, Tour the features) are visually subordinate. PantryBaby
and BabyBlocks Core pages drive waitlist signups instead.
