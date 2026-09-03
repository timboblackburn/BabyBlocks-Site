# Astro Starter Kit: Minimal

```sh
npm create astro@latest -- --template minimal
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
| `npm run check:dsr-config`| Verify the data-request form is safe to ship     |

## Data-request form configuration

`/data-request` is the page the privacy policy names as the way to exercise a
GDPR/CCPA right, with a promised 30-day response.

It needs **`PUBLIC_CRM_BASE_URL`**, the CRM origin only — no path, no trailing
slash. The page appends `/api/compliance/babyblocks/dsr-submit` itself.

```
PUBLIC_CRM_BASE_URL=https://api.babyblocks.io
```

**Where to set it:** Cloudflare Pages → this project → **Settings → Environment
variables**, in **both** the *Production* **and** *Preview* environments, then
redeploy. Setting it in Preview only leaves production broken and silent.
Locally, put it in `site/.env` (git-ignored; see `site/.env.example`).

`npm run build` runs `scripts/assert-dsr-config.mjs` first and **fails the build**
if the page still ships a submitting form while the variable is unset, is not an
absolute `https` origin, or points at a BabyBlocks hostname other than
`babyblocks.io`. There is no escape hatch — an unset value is exactly how the
live form came to tell customers "Thanks. We got it" while recording nothing.

To take the form down instead, replace the form on `src/pages/data-request.astro`
with the email-only path; the build gate then passes on its own.

### Known gap (verified 2026-09-02)

Setting the variable makes the page **truthful**, not **functional**. The backend
route `https://api.babyblocks.io/api/compliance/babyblocks/dsr-submit` does not
exist and returns 404. With the variable set, a submission fails and the page says
so plainly and points at `support@babyblocks.io`. Online DSR starts working only
when that route is built.

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
