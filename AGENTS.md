# Repository Guidelines

## Project Structure & Module Organization
Astro source lives in `src/`, split into `components/` for UI atoms, `layouts/` for shared shells, and `pages/` for routed entries; keep content collections in `src/content/` beside `content.config.ts` so type-safe frontmatter stays intact. Global site settings, hero copy, and project metadata live in `src/config.ts`, while static assets (favicons, images, fonts) belong under `public/`. Build artifacts are emitted to `dist/`; never edit them manually. Tailwind theming and typography plugins are configured via `tailwind.config.mjs`, and Astro-wide integrations sit in `astro.config.mjs`.

## Build, Test, and Development Commands
Use `npm run dev` for local authoring with hot reload. Ship-ready bundles come from `npm run build`, which runs `astro check` before compiling. Validate production output with `npm run preview`. Run the typed content and Astro diagnostics standalone via `npm run astro -- check` when you only need schema validation (useful in CI hooks).

## Coding Style & Naming Conventions
Stick to TypeScript + Astro modules with ES modules imports and double quotes (see `src/pages/index.astro`). Use two-space indentation for templates and scripts. Mirror Tailwind utility ordering from existing files; prefer semantic, kebab-case class names for any custom CSS. Components should export PascalCase filenames (e.g., `SocialLink.astro`), while helper modules inside `src/types/` and `src/config.ts` remain in camelCase.

## Testing Guidelines
There is no dedicated unit-test runner yet, so rely on `astro check` plus manual verification in `npm run preview`. When adding tests, co-locate `.test.ts` files near the module and prefer Playwright or Vitest for DOM-heavy pieces. Any new content collection requires an accompanying schema update inside `src/content/config.ts` and a smoke test pass through preview before merging.

## Commit & Pull Request Guidelines
Follow the existing history pattern: short, present-tense subjects optionally prefixed with a tag such as `[feat]:` or `Fix:` plus a concise summary. Each PR should describe scope, link issues or Linear tickets, list verification steps (dev server, build, preview), and attach screenshots/GIFs for visual changes. Keep PRs scoped to a single feature or fix to ease Vercel previews and Astro’s incremental builds.
