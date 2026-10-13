import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

// One entry per file that scripts/fetch-aac.mjs downloads, with ids such as
// "v0.1.0/SPEC".
const aac = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/generated',
    generateId: ({ entry }) => entry.replace(/\.md$/, ''),
  }),
});

export const collections = { aac };
