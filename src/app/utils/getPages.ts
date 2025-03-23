import fs from 'fs';
import path from 'path';

export function getPages() {
  const appDir = path.join(process.cwd(), 'src/app');
  const pages: { path: string; name: string }[] = [];

  function scanDirectory(dir: string, basePath: string = '') {
    const files = fs.readdirSync(dir);

    files.forEach((file) => {
      const fullPath = path.join(dir, file);
      const relativePath = path.join(basePath, file);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        // Skip special Next.js directories
        if (!file.startsWith('_') && !file.startsWith('.')) {
          scanDirectory(fullPath, relativePath);
        }
      } else if (file === 'page.tsx' && basePath) {
        // Convert path to URL format
        const urlPath = '/' + basePath.replace(/\\/g, '/');
        // Convert path to display name
        const name = basePath
          .split(/[/\\]/)
          .pop()!
          .replace(/-/g, ' ')
          .replace(/\b\w/g, (l) => l.toUpperCase());

        pages.push({ path: urlPath, name });
      }
    });
  }

  scanDirectory(appDir);
  return pages;
}
