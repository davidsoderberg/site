import type { LoaderFunction } from '@remix-run/node';
import { getDomainUrl } from '../utils/misc';
import { getPosts } from '../utils/posts';

// Found this soultion here: https://github.com/kentcdodds/kentcdodds.com
export const loader: LoaderFunction = async ({ request }) => {
  const posts = getPosts();

  const blogUrl = `${getDomainUrl(request)}/posts`;

  const rss = `
    <rss xmlns:blogChannel="${blogUrl}" version="2.0">
      <channel>
        <title>David Söderberg posts</title>
        <link>${blogUrl}</link>
        <description>David Söderberg posts</description>
        <language>en-us</language>
        <generator>Davids</generator>
        <ttl>40</ttl>
        ${posts
          .map((post) =>
            `
            <item>
              <title>${cdata(post.attributes.title)}</title>
              <description>${cdata(post.attributes.description)}</description>
              <pubDate>${post.attributes.date}</pubDate>
              <link>${blogUrl}/${post.slug}</link>
              <guid>${blogUrl}/${post.slug}</guid>
            </item>
          `.trim()
          )
          .join('\n')}
      </channel>
    </rss>
  `.trim();

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/xml',
      'Content-Length': String(Buffer.byteLength(rss)),
    },
  });
};

function cdata(s: string) {
  return `<![CDATA[${s}]]>`;
}
