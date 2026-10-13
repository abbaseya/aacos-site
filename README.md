# aacos.dev

The website for the [Agent Acceptance Contract](https://github.com/abbaseya/agent-acceptance-contract). The standard lives in that repo. This repo builds the site and nothing else.

## How it works

`scripts/fetch-aac.mjs` downloads the AAC documents from tagged releases at build time, into `src/generated/` (not committed):
- for the current tag: `README.md`, `SPEC.md`, `EVIDENCE.md` and `BINDINGS.md`;
- for every older tag: `SPEC.md`.

The home and validate pages are sections of the tag's `README.md`. Relative links become site routes, or links to the file on GitHub at the same tag. Nothing from the standard is copied by hand.

`aac.config.json` names the current tag and the list of versions. To publish a new release of the standard, add its tag there and set it as `current`.

## Commands

```bash
yarn install
yarn dev        # fetch, then a local dev server
yarn build      # fetch, then a static build in dist/
yarn preview    # serve dist/
```

Astro 7, static output, yarn 4.
