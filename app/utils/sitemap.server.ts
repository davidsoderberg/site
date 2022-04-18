import type { EntryContext } from '@remix-run/node';
import { getDomainUrl } from './misc';

const removeTrailingSlash = (s: string) =>
  s.endsWith('/') ? s.slice(0, -1) : s;

// Found this soultion here: https://github.com/kentcdodds/kentcdodds.com
export async function sitemapXml(
  request: Request,
  remixContext: EntryContext
) {
  const domainUrl = getDomainUrl(request);

  function getEntry({ route, lastmod, changefreq, priority }: any) {
    return `
<url>
  <loc>${domainUrl}${route}</loc>
  ${lastmod ? `<lastmod>${lastmod}</lastmod>` : ''}
  ${changefreq ? `<changefreq>${changefreq}</changefreq>` : ''}
  ${priority ? `<priority>${priority}</priority>` : ''}
</url>
  `.trim();
  }

  const rawSitemapEntries = (
    await Promise.all(
      Object.entries(remixContext.routeModules).map(async ([id, mod]) => {
        const handle = mod.handle as any;
        if (handle?.getSitemapEntries) {
          return handle.getSitemapEntries(request);
        }

        const manifestEntry = remixContext.manifest.routes[id];
        if (!manifestEntry) {
          console.warn(`Could not find a manifest entry for ${id}`);
          return;
        }
        let parentId = manifestEntry.parentId;
        let parent = parentId ? remixContext.manifest.routes[parentId] : null;

        let path;
        if (manifestEntry.path) {
          path = removeTrailingSlash(manifestEntry.path);
        } else if (manifestEntry.index) {
          path = '';
        } else {
          return;
        }

        while (parent) {
          const parentPath = parent.path
            ? removeTrailingSlash(parent.path)
            : '';
          path = `${parentPath}/${path}`;
          parentId = parent.parentId;
          parent = parentId ? remixContext.manifest.routes[parentId] : null;
        }

        const entry: any = { route: removeTrailingSlash(path) };
        return entry;
      })
    )
  )
    .flatMap((z) => z)
    .filter(Boolean);

  const xml = `
<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"
>
  ${rawSitemapEntries.map((entry) => getEntry(entry)).join('')}
</urlset>
  `.trim();
  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Content-Length': String(Buffer.byteLength(xml)),
    },
  });
}
