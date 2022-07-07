import type { MetaFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { raindropService } from '../utils/raindrop.server';

export const handle = {
  getSitemapEntries: () => [{ route: `/bookmarks`, priority: 0.7 }],
};

export const meta: MetaFunction = () => {
  const title = `David Söderberg - Bookmarks`;
  return {
    title,
    'og:title': title,
    description: 'My programing related bookmarks you might enjoy as well.',
  };
};

export const loader = async () => {
  const drops = await raindropService.raindrops();
  return {
    bookmarks: drops.items,
  };
};

export default function Bookmarks() {
  const { bookmarks } = useLoaderData();
  return (
    <>
      <h2>Bookmarks</h2>
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
            <div className="divider"></div>
          </div>
        );
      })}
    </>
  );
}
