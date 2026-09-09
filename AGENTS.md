# AGENTS.md

Personal portfolio and blog site built with Next.js 16, React 19, and TypeScript.

## Commands

| Command              | Description       |
| -------------------- | ----------------- |
| `npm run dev`        | Start dev server  |
| `npm run build`      | Production build  |
| `npm run type-check` | TypeScript check  |
| `npm run lint`       | ESLint check      |
| `npm run lint:fix`   | Fix ESLint errors |
| `npm run format`     | Format with Oxfmt |

## Guidelines

- [Architecture](.agents/architecture.md) - Tech stack, project structure, Next.js features
- [Code Conventions](.agents/code-conventions.md) - Imports, styling, components, data fetching
- [Accessibility](.agents/accessibility.md) - A11y patterns and requirements

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
