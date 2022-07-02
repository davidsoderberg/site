import { Link, useLoaderData } from '@remix-run/react';
import type { LoaderFunction } from '@remix-run/node';
import {getPosts} from '../../utils/posts';

export const loader: LoaderFunction = async () => {
  return getPosts();
};

export const handle = {
  getSitemapEntries: () => {
    const posts = getPosts();
    return posts.map((page) => {
      return { route: `/posts/${page.slug}`, priority: 0.6 };
    }).push({ route: `/posts`, priority: 0.7 });
  },
};

export default function Posts() {
  const posts = useLoaderData();
  return (
    <>
      {posts.map((post) => {
        return (
          <div key={post.slug}>
            <h2>
              <Link
                style={{ textDecoration: 'none' }}
                to={`/posts/${post.slug}`}
              >
                {post.attributes.title}
              </Link>
            </h2>
            <p>{post.attributes.date.split('T')[0]}</p>
            <p>{post.attributes.description}</p>
            <hr />
          </div>
        );
      })}
    </>
  );
}
