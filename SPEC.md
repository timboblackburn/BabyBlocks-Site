# BabyBlocks Site SPEC (Astro + Cloudflare Pages)

## Brand + Purpose
- Brand: BabyBlocks (ecosystem)
- Primary product focus: BudgetBaby
- Domain: babyblocks.io
- Purpose: Premium, trustworthy marketing site for the ecosystem, with BudgetBaby as the core focus.
- Tone: Confident, clean, simple. No hype, no fluff, no “startup bro” language.

## Visual System (Non-negotiable)
- Theme: BudgetBaby-inspired black + purple.
- Style: Glassmorphism (frosted glass cards/sections), subtle blur, soft borders, controlled glow.
- Layout: iOS-like spacing, big breathable sections, crisp typography, strong hierarchy.
- Dark mode only for now (no toggle), because it matches BudgetBaby.

## Information Architecture (Top Nav)
Top-level navigation items:
1) BudgetBaby
2) Coming Soon
3) About

### BudgetBaby Section (Main + Subpages)
- /budgetbaby (main landing)
Subpages:
- /budgetbaby/features
- /budgetbaby/documentation
- /budgetbaby/support
- /budgetbaby/privacy
- /budgetbaby/terms

### Coming Soon
- /coming-soon
Contains:
- PantryBaby (coming soon) with a focused “what it is” + “what to expect” + “notify me” CTA.

### About
- /about
Contains:
- What BabyBlocks is
- Why the ecosystem exists
- Philosophy (clarity, trust, privacy-first)
- Ecosystem map (BudgetBaby now, PantryBaby soon, future apps)

## Content Requirements
- No lorem ipsum.
- Copy must be specific, human, and grounded.
- Use short paragraphs and scannable headings.
- Trust signals are required:
  - clear privacy stance
  - support contact
  - transparent roadmap (light touch)
  - clear “what it does” and “who it’s for”

## Required Sections Per Page

### /budgetbaby (Main)
- Hero:
  - Headline: BudgetBaby helps users see where their money goes and stay in control.
  - Primary CTA: Download BudgetBaby (App Store link placeholder)
  - Secondary CTA: Get updates (MailerLite placeholder embed)
- Feature grid: 6 features
- “How it works”: 3 steps
- “Designed for clarity”: short trust paragraph
- FAQ: 8 questions (BudgetBaby specific)
- Footer: links to Support, Privacy, Terms, Docs, Features

### /budgetbaby/features
- Feature deep-dive cards
- Each feature: what it does, why it matters, what it replaces
- CTA at end

### /budgetbaby/documentation
- Documentation hub
- Sections:
  - Getting Started
  - Accounts & Sync
  - Subscriptions
  - Data & Backups
  - Troubleshooting
- Simple internal anchor links

### /budgetbaby/support
- Support contact: support@babyblocks.io
- Support workflow:
  - “Before you email us” checklist
  - Common issues list
  - Response expectations (simple and professional)
- CTA: email support

### /budgetbaby/privacy
- Privacy policy page placeholder with real structure:
  - What data is collected
  - What is not collected
  - Storage and security approach
  - Contact email
Note: Keep it general, do not invent legal claims.

### /budgetbaby/terms
- Terms page placeholder with structure:
  - Usage
  - Subscription
  - Liability
  - Contact
Note: Keep it general, do not invent legal claims.

### /coming-soon
- Hero: PantryBaby (Coming Soon)
- Description: what it is and what problem it solves
- “What’s coming” bullets
- Notify CTA placeholder (MailerLite embed placeholder)
- Link back to BudgetBaby

### /about
- What BabyBlocks is
- Ecosystem explanation
- “Why we built this” (clarity, control, calm)
- Ecosystem map section:
  - BudgetBaby: live
  - PantryBaby: coming soon
  - Future: placeholders
- Trust and contact

## Technical Requirements
- Astro site, static output.
- No backend logic.
- Use one design system file with CSS variables.
- Reusable layout and components.
- Responsive mobile-first.
- SEO basics per page:
  - title
  - meta description
  - open graph basics
