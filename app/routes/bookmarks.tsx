import type { MetaFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { MDX } from '../components/Mdx';
import { compileMdx } from '../utils/mdx.server';
import { raindropService } from '../utils/raindrop.server';

export const handle = {
  getSitemapEntries: () => [{ route: `/bookmarks`, priority: 0.7 }],
};

export const meta: MetaFunction = ({ data: { frontmatter } }) => {
  const title = `David Söderberg - ${frontmatter.title}`;
  return {
    title,
    'og:title': title,
    description: frontmatter.description,
  };
};

export const loader = async () => {
  const path = __dirname + '/../content';
  const { code: content, frontmatter } = await compileMdx(
    'bookmarks.mdx',
    path
  );
  const drops = await raindropService.raindrops();
  return {
    bookmarks: drops.items,
    content,
    frontmatter,
  };
};

export default function Bookmarks() {
  const { bookmarks, content } = useLoaderData();
  return (
    <>
      <MDX code={content} />
      {bookmarks.map((item) => {    
        return (
          <div key={item._id}>
            <h3>
              <a
                style={{ textDecoration: 'none' }}
                href={item.link}
                target='_blank'
                rel='noreferrer'
              >
                {item.title} <small>({item.domain})</small>
              </a>
            </h3>
            <p>{item.excerpt}</p>
            <hr />
          </div>
        );
      })}
    </>
  );
}
