# Vite+ Playground

This workspace uses [Vite+ v1.0.0-rc.0](https://github.com/voidzero-dev/vite-plus/releases/tag/v1.0.0-rc.0). It is based on the official `vite:monorepo` template.

## Contents

- `apps/website`: A Vite web app. Edit the page or counter to try hot module replacement (HMR).
- `packages/utils`: A library with a `vite-plus/test` test and a `vp pack` build.
- `vite.config.ts`: Settings for formatting, lint, type checks, and task caching.

## Requirements

Use Node.js 22.18.0 or later in the 22.x series, 24.11.0 or later in the 24.x series, or 26.0.0 or later. This workspace uses pnpm 12.4.2.

## Start

```bash
git clone https://github.com/naokihaba/vite-plus-playgroudn.git
cd vite-plus-playgroudn
pnpm install
pnpm exec vp run dev
```

Open the URL shown by the development server. Edit `apps/website/src/main.ts` to try HMR. If you do not have the global `vp` command, use `pnpm exec vp` for the commands below.

## Check the workspace

```bash
vp check          # Check format, lint, and types
vp run -r test    # Run the Vitest 5 test
vp run -r build   # Build the web app and library
vp run ready      # Run all checks above
```

`vp run` runs workspace scripts. Use `vp run dev` to start the web app. To test only the library, go to `packages/utils` and run `vp test`.
