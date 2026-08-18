# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A personal portfolio website ("Will's Portfolio") built with **SvelteKit + Svelte 4 + TypeScript**. All portfolio content (work experience, education, projects, skills) is data-driven from JSON files in `src/lib/data/`, parsed into a hand-styled single-page frontend. Deployed on Vercel (`@vercel/analytics` is injected in the layout; `adapter-auto` resolves to the Vercel adapter).

`README.md` is not build documentation — it is a living feature spec / checklist tracking which pieces of the design are done. Treat it as the product intent, not as instructions.

## Commands

```bash
npm run dev        # vite dev server (svelte.config.js enables the Svelte inspector)
npm run build      # production build
npm run preview    # preview the production build
npm run check      # svelte-kit sync + svelte-check type-check (TS + Svelte)
npm run check:watch
npm run lint       # prettier --check . && eslint .
npm run format     # prettier --write .
```

There is no test runner configured. `npm run check` is the closest thing to a correctness gate — run it after changing types, stores, or data shapes.

## Architecture

### Modal-driven single page (not scroll sections)

The entire site is one route: [src/routes/+page.svelte](src/routes/+page.svelte). It renders the hero + a grid of five "section launchers." Each launcher **opens a modal** rather than scrolling to a section. The currently open section is a single `activeModal` store value, and `+page.svelte` conditionally renders exactly one section component (`AboutMe`, `ProfessionalBackground`, `Projects`, `SkillsInterests`, `Contact`) based on it. Despite the README describing scroll/sidebar navigation, the implemented model is modal-based — this is the key architectural fact.

### Global state: `src/lib/portfolio.ts`

The app's "router" and shared UI state live in [src/lib/portfolio.ts](src/lib/portfolio.ts) as Svelte `writable` stores, not in URL/routing:
- `activeModal` — which `Section` modal is open (`null` = none). Driven by `openModal(section)` / `closeModal()`.
- `theme` — `'dark' | 'light'`, toggled via `toggleTheme()`.
- `toast` — transient message; use `showToast(msg)` (auto-clears after ~1.9s) or `copyToClipboard(text, label)` (writes to clipboard and flashes a toast).

To add a new section: extend the `Section` union here, add it to the `sections` array and the `{#if}` chain in `+page.svelte`, and create a component that wraps `Modal`.

### Reusable modal shell: `src/components/Modal.svelte`

Every section component renders its content inside [Modal.svelte](src/components/Modal.svelte), which owns the backdrop, panel, and enter/exit transitions. Props: `width`, `layout` (`'scroll'` = whole panel scrolls; `'flex'` = column with inner scroll regions), and `background`. It dispatches a `close` event — wire it to `closeModal`. `Escape` also closes (handled by a `svelte:window` keydown in `+page.svelte`).

### Data convention (important)

Content JSON lives in `src/lib/data/` and is imported directly (`resolveJsonModule` is on):
- `work_exp.json` and `education.json` are **objects keyed by numeric strings** where a **lower/more-negative key is more recent** (e.g. `"-3"` is newer than `"-1"`). `ProfessionalBackground.svelte` sorts ascending by `Number(key)` via its `byKey` helper, so the most recent entry leads. Preserve this keying when editing.
- The `stack` field on work entries is optional and defaulted to `[]`.
- `projects.json` is keyed `"0"`, `"1"`, … and each project carries a `keywords[]` array (fields of CS + tech stack) intended for search/filtering.
- `skills_interests.json` has `skills[]` and interests.
- `templates.JSON` is a scaffolding/reference template, not consumed at runtime.

## Styling & theming

Styling is **hand-rolled CSS custom properties**, not Skeleton utility classes. Although Skeleton UI (`@skeletonlabs/skeleton`) and a generated Skeleton theme (`src/custom1.ts`, registered in `tailwind.config.ts`) are installed, the actual visual design is driven by CSS variables (`--bg1`, `--accent`, `--tile`, …) defined in the `.app` block of `+page.svelte` and consumed across component `<style lang="postcss">` blocks.

Light/dark theming works by setting `data-theme={$theme}` on the root `.app` element, which re-defines those CSS variables under the `.app[data-theme='light']` selector. This is independent of Tailwind's `darkMode: 'selector'` and of Skeleton's theme system. When adding styled UI, reuse the existing CSS variables so both themes stay consistent.

## Conventions

- Prettier config uses **tabs**, single quotes, no trailing commas, `printWidth: 100`, with `prettier-plugin-svelte`. ESLint is flat-config (`eslint.config.js`) with `eslint-plugin-svelte` + `typescript-eslint`.
- Import shared code via the `$lib` alias; images via `$lib/images/...` (Vite handles the asset import).
