# Repository Guidelines

## Project Structure & Module Organization
- `src/pages` stores Astro entry points; keep them thin and delegate logic to islands.
- `src/components` holds reusable UI, including motion wrappers in `motion/` and the theme toggle island.
- `src/lib` centralizes typed data and helpers; update `lib/data.ts` when editing portfolio content.
- MDX notes live under `src/content/notes`; media assets belong in `public/`.
- Build artifacts land in `dist/`; do not commit this directory.

## Build, Test, and Development Commands
- `npm run dev` launches the Astro dev server with hot reload.
- `npm run build` generates the static production bundle (writes to `dist/`).
- `npm run preview` serves the built site locally for final smoke checks.

## Coding Style & Naming Conventions
- Favor Astro for layout and data plumbing; reach for React 19 islands (`.tsx`) only when interactivity is needed.
- Components use PascalCase, utilities camelCase, and import paths the `@/` alias.
- Match the existing formatting: tabs in Astro/HTML blocks and 2-space TypeScript inside React islands.
- Stick to Tailwind utility groupings already in use; remove unused classes during edits.
- Theme is dark-first via CSS variables set in global styles; preserve existing tokens when extending palettes.
- Animations should route through `@/components/motion` to keep Framer Motion variants consistent.

## Testing Guidelines
- There is no automated test suite yet; rely on manual QA.
- Run `npm run preview` before opening a PR and verify theme toggle persistence, responsive breakpoints, and copy accuracy.
- Update or create MDX content alongside schema changes so content collections stay in sync.

## Commit & Pull Request Guidelines
- Follow the existing history: concise, present-tense summaries (e.g., `refine hero spacing`).
- Squash unrelated work; each commit should target a single feature or fix.
- PRs need a short summary, screenshots/GIFs for visual updates, and links to any related issues or todo items.
- Note any follow-up tasks or content gaps directly in the PR description to guide future iterations.

## Configuration & Theme Notes
- Tailwind config and global tokens live in `tailwind.config.js` and `src/styles/global.css`; mirror the established scales.
- Local storage drives the theme toggle; avoid renaming the stored key without migrating existing users.
