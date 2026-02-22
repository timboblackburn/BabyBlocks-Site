# CLAUDE TASK: BabyBlocks Astro Site (BudgetBaby-First)

You are building a production-ready Astro marketing site for babyblocks.io.

Non-negotiable:
- Dark mode only.
- BudgetBaby black + purple theme.
- Glassmorphism design language: frosted panels, subtle blur, soft border, controlled glow.
- iOS-like spacing and typography hierarchy.
- No lorem ipsum.
- Static site only.

Do the following:

1) Create a design system using CSS variables:
   - colors (black/purple accents)
   - typography scale
   - spacing scale
   - radius + blur + border tokens
   - shadow/glow tokens
   Keep this in a single file (e.g., src/styles/theme.css) and import globally.

2) Create reusable components:
   - Header (top nav: BudgetBaby, Coming Soon, About)
   - Footer (links: BudgetBaby subpages + Coming Soon + About)
   - HeroSection
   - FeatureGrid
   - FeatureCards (for deep-dive page)
   - FAQAccordion
   - CTASection
   - GlassCard component (reusable frosted container)

3) Create a global layout and apply it to all pages.

4) Create the exact page routes:
   - src/pages/index.astro -> redirect or simple home routing choice:
     - Option A: make / a clean homepage that immediately routes users into BudgetBaby as primary focus
     - Option B: make / a “BabyBlocks overview” page with strong CTA to BudgetBaby
     Choose whichever creates the best premium feel and clarity.

   BudgetBaby:
   - src/pages/budgetbaby/index.astro
   - src/pages/budgetbaby/features.astro
   - src/pages/budgetbaby/documentation.astro
   - src/pages/budgetbaby/support.astro
   - src/pages/budgetbaby/privacy.astro
   - src/pages/budgetbaby/terms.astro

   Coming Soon:
   - src/pages/coming-soon.astro

   About:
   - src/pages/about.astro

5) Fill with realistic, grounded copy.
   - Do not invent legal claims.
   - Use placeholder text for App Store links and MailerLite form embed blocks.

6) Ensure responsiveness:
   - mobile-first
   - nav collapses cleanly
   - cards stack properly

7) SEO:
   - add titles + meta descriptions per page
   - clean heading structure (h1, h2, h3)

8) After implementation, provide:
   - list of files created/changed
   - how to run dev and build
   - any assumptions made
