# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

AccelByte Gaming Services (AGS) TypeScript SDK — a monorepo of ~38 packages providing typed API clients for AccelByte backend services. Most `sdk-*` packages are **auto-generated** from Swagger/OpenAPI specs; do not edit generated code directly.

## Common Commands

```bash
# Install dependencies (requires Node 18+, Yarn 4.4.0 via corepack)
corepack enable && yarn install

# Build core SDK (must build validator first)
yarn build:sdk-core

# Build all SDK packages (core + all sdk-* packages)
yarn build:sdk

# Build a single package
yarn workspace @accelbyte/sdk-iam build

# Lint (with auto-fix)
yarn lint

# Format
yarn format:all

# Run unit tests (core SDK — vitest, 30s timeout)
yarn workspace @accelbyte/sdk test:unit

# Run a single test file
yarn workspace @accelbyte/sdk vitest run src/__tests__/SomeTest.test.ts

# Run E2E tests (core SDK — playwright, chromium)
yarn workspace @accelbyte/sdk test:e2e

# Run codegen tests
yarn workspace @accelbyte/codegen test

# Regenerate all SDK packages from swagger specs
yarn codegen:sdk

# Regenerate a single SDK package (from its directory)
cd packages/sdk-iam && yarn codegen
```

## Architecture

### Package Hierarchy

- **`@accelbyte/sdk`** — Core SDK. Contains `AccelByteSDK` class, axios-based networking, interceptor system, Zod schema validation, WebSocket support, and polyfills for browser/node. This is the only package with unit and E2E tests.
- **`@accelbyte/validator`** — Input validation utilities (display name, email, password, etc.). Must be built before core SDK.
- **`@accelbyte/codegen`** — CLI tool that generates TypeScript API clients + React Query hooks + Zod schemas from Swagger specs. Has its own vitest tests.
- **`@accelbyte/error-translator`** — Error message translation (built with rollup, separate from other packages).
- **`sdk-*` packages** (~34) — Auto-generated API clients. Each contains:
  - `src/generated-public/` — Public API endpoints
  - `src/generated-admin/` — Admin API endpoints
  - `src/generated-definitions/` — TypeScript types + Zod schemas
  - `src/all-query-imports.ts` — React Query hooks (v4 + v5)
  - `src/index.global.ts` — IIFE/UMD entry point
  - `swaggers/` — Source OpenAPI specs and `swaggers.json` config

### Testing

Colocate test files with the source files. For example, if the source file is called `utils.ts`, then the test file name is `utils.test.ts`.

### Special Case: `sdk-iam`

Contains hand-written code in `src/custom/` (auth clients, custom models) alongside generated code. The custom code provides `IamUserAuthorizationClient` and related auth flows.

### Build System

- **tsup** builds all packages. Generated packages use shared config from `tsupconfig.base.ts`.
- Core SDK has a custom `tsup.config.ts` producing 4 outputs: Node CJS, Node ESM, Browser ESM, Browser IIFE.
- Generated packages produce: CJS, ESM, and IIFE (minified, using `window.AccelByteSDKDependencies` for globals).

### Codegen Pipeline

`scripts/generate/sdk-generate.mjs` orchestrates generation across all packages:
1. Downloads swagger specs from API
2. Runs `@accelbyte/codegen` to generate TypeScript code
3. Lints with ESLint, formats with Prettier

Per-package codegen: `yarn codegen` in a package directory runs `clean:src → cg:generate → cg:lint → cg:prettify`.

### Internal Dependencies

- All `sdk-*` packages declare `@accelbyte/sdk` as a `peerDependency` and use `workspace:*` for dev.
- `@tanstack/react-query` is an optional peer dependency (v4 or v5 supported).

## Scripts (`scripts/`)

### Bulk Package Updates (`scripts/update/`)

Updates `package.json` fields (scripts, deps, exports) across all SDK packages from a central config.

```bash
# Sync all sdk-* package.json with standard config (scripts, devDeps, etc.)
node scripts/update/update-packages.mjs

# Sync with publish-ready exports (main, types, exports fields). Used mainly in publish pipeline
node scripts/update/update-packages.mjs --update-type update-publish

# Also copy react-query/ folder to each package. Used mainly in publish pipeline
node scripts/update/update-packages.mjs --copy-react-query-folder

# Update example project SDK deps to a specific version. Used after publish SDK to test the examples
node scripts/update/update-example-sdk.mjs --example examples/sdk-react-query-example --version latest

# Local publish via yalc (for testing SDK changes in examples projects)
node scripts/update/local-publish.mjs --sdk sdk,sdk-iam
node scripts/update/local-publish.mjs --example examples/sdk-react-query-example
```

Config files: `update.json` (dev config), `update-publish.json` (npm publish config), `update-publish-local.json` (revert after yalc). Template files in `resources/` are copied to each package.

### Publishing (`scripts/publishing/`)

Publishing pipeline (typically run in CI):

1. **`prepublish-npm.js`** — Builds and tests all workspace packages.
2. **`prepublish-github.mjs`** — Cleans packages for GitHub release (removes codegen scripts, excluded folders). Respects `EXCLUDED_ITEMS` env var.
3. **`create-stub-changeset.js`** — Creates stub changeset entries (patch bumps) when Changesets workflow is needed.
4. **`publish-every-workspace-to-npm.js`** — Publishes all non-private packages to npm. Uses `NPM_TOKEN` env var; supports `DRY_RUN=true`. Auto-detects prerelease tags from version (e.g., `1.0.0-beta.1` → `--tag beta`).

Shared helpers in `common.js`. The `PACKAGE_TO_BUILD` env var can filter to specific packages.

## Code Style

- Prettier: 140 char width, no semicolons, single quotes, trailing commas off
- ESLint: unused-imports enforced, `@typescript-eslint/no-explicit-any` is off (any is allowed)
- Unused vars prefixed with `_` are ignored by linter
- DO NOT GENERATE comments that are self-explanatory. Use comments only to describe a flow, background/motivation, or JSDoc specific comment for end-user.
- When importing React Query related from inside the workspace:
  - Ensure that the package is already included in the `package.json` and `tsconfig.json`. The latter has to include `.../*` which maps to `/src/*`. Any React Query related imports should be imported from `.../all-query-imports`.

## Versioning

Uses Changesets (`yarn changeset:version`, `yarn changeset:tag`). Pre-publish scripts in `scripts/publishing/` update package.json exports fields before npm publish.
