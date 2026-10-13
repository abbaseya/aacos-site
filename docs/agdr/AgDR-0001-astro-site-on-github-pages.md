---
id: AgDR-0001
timestamp: 2026-10-13T03:48:09Z
agent: platform-engineer
model: claude-fable-5-1
session: b2751335-b662-4987-9729-0b60ddefac9d
trigger: user-prompt
status: executed
category: tech-stack
projects: [aacos-site]
---

# Build aacos.dev with Astro 7 and deploy it with GitHub Pages

> In the context of the aacos.dev site, I decided to mirror the agcs.dev site: a static Astro 7 site that renders the AAC documents from a tagged release, deployed through GitHub Actions to GitHub Pages. I accepted that the two sites share one layout and differ only in their mark and accent colour.

## Context

- AAC is the sibling of AGC, and agcs.dev already renders the AGC documents from a tagged release of `abbaseya/agent-gate-contract` with Astro 7.3.4 on GitHub Pages.
- The owner wants aacos.dev to look and work like agcs.dev, not like a README rendered by the repo's own Pages setting.
- The site must never carry a hand-made copy of the standard. It renders `SPEC.md`, `EVIDENCE.md`, `BINDINGS.md` and parts of `README.md` from a tag of `abbaseya/agent-acceptance-contract`.

## Options Considered

| Option | Pros | Cons |
|--------|------|------|
| Mirror agcs.dev file for file, with the AAC names and its own accent (chosen) | One family, one look. Every fix to one site is a known fix to the other. | Two copies of the same layout to keep in step. |
| GitHub Pages on the standard's repo, rendering the README | No site repo. | Jekyll's default theme, no versions, no navigation, and the standard's repo carries a Pages setting it does not need. |
| One shared site for AGC and AAC | One repo. | Two domains, two release cadences, and a change to the agcs.dev site that already works. |

## Decision

Chosen: **a separate site repo that mirrors agcs.dev**, with `aac.config.json` naming the tag it renders, because the two standards are siblings and their sites should be too.

## Consequences

- `scripts/fetch-aac.mjs` downloads the documents for the tags in `aac.config.json` before each build. A new AAC release needs only a tag added there.
- `.github/workflows/site.yml` builds on every pull request. On a push to `main` it also uploads `dist/` and deploys it to Pages. Every action is pinned by commit SHA, at the same SHAs as agcs.dev.
- The custom domain `aacos.dev` and HTTPS are set in the repo's Pages settings, not in a `CNAME` file.
- The footer links to agcs.dev as the sibling standard.
