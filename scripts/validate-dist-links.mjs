import { access, readFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const DIST_DIR = path.resolve(process.cwd(), 'dist');
const URL_PATTERN = /(?:href|src)=["']([^"']+)["']/g;
const SKIP_PREFIXES = ['http://', 'https://', 'mailto:', 'tel:', 'data:', '#', 'javascript:'];

async function exists(filePath) {
  try {
    await access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function getHtmlFiles(rootDir) {
  const entries = await readdir(rootDir, { withFileTypes: true });
  const files = await Promise.all(entries.map(async (entry) => {
    const fullPath = path.join(rootDir, entry.name);
    if (entry.isDirectory()) {
      return getHtmlFiles(fullPath);
    }
    if (entry.isFile() && entry.name.endsWith('.html')) {
      return [fullPath];
    }
    return [];
  }));

  return files.flat();
}

function normalizeAssetPath(rawUrl, htmlFile) {
  if (!rawUrl) {
    return null;
  }

  const cleaned = rawUrl.split('#')[0].split('?')[0].trim();
  if (!cleaned || SKIP_PREFIXES.some((prefix) => cleaned.startsWith(prefix)) || cleaned.startsWith('//')) {
    return null;
  }

  // Skip route links such as /about or ./portfolio where extension is absent.
  if (!path.extname(cleaned)) {
    return null;
  }

  if (cleaned.startsWith('/')) {
    return path.join(DIST_DIR, cleaned.slice(1));
  }

  return path.resolve(path.dirname(htmlFile), cleaned);
}

async function main() {
  const hasDist = await exists(DIST_DIR);
  if (!hasDist) {
    console.error('dist/ not found. Run `npm run build` before `npm run verify`.');
    process.exit(1);
  }

  const htmlFiles = await getHtmlFiles(DIST_DIR);
  const missing = [];

  for (const htmlFile of htmlFiles) {
    const content = await readFile(htmlFile, 'utf8');
    for (const match of content.matchAll(URL_PATTERN)) {
      const target = normalizeAssetPath(match[1], htmlFile);
      if (!target) {
        continue;
      }

      if (!(await exists(target))) {
        missing.push({
          file: path.relative(process.cwd(), htmlFile),
          link: match[1],
          expected: path.relative(process.cwd(), target)
        });
      }
    }
  }

  if (missing.length > 0) {
    console.error('Found broken static asset links:');
    for (const issue of missing) {
      console.error(`- ${issue.file}: "${issue.link}" -> missing "${issue.expected}"`);
    }
    process.exit(1);
  }

  console.log(`Verified ${htmlFiles.length} HTML files. No broken static asset links found.`);
}

await main();
