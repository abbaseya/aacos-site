import { getEntry, render } from 'astro:content';
import config from '../../aac.config.json';

export const AAC = config;
export const REPO_URL = `https://github.com/${config.repo}`;

// Renders one fetched AAC document, for example ("v0.1.0", "SPEC").
export async function renderDocument(tag: string, name: string) {
  const entry = await getEntry('aac', `${tag}/${name}`);
  if (!entry) throw new Error(`Missing ${tag}/${name}.md. Run yarn fetch:aac.`);
  return render(entry);
}
