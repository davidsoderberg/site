import { Link, useLoaderData } from '@remix-run/react';
import type { LoaderFunction, MetaFunction } from '@remix-run/node';
import { getListOfMdx } from '../../utils/mdx.server';

export const loader: LoaderFunction = async () => {
  const posts = (await getListOfMdx()).filter((post) => post.list);
  posts.sort((a, z) => {
    const aTime = new Date(a.date).getTime();
    const zTime = new Date(z.date).getTime();
    return aTime > zTime ? -1 : aTime === zTime ? 0 : 1;
  });
  return posts;
};

export const handle = {
  getSitemapEntries: () => [{ route: `/posts`, priority: 0.7 }],
};

export const meta: MetaFunction = () => ({
  title: 'David Söderberg - Posts',
});

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
                {post.title}
              </Link>
            </h2>
            <p>{post.date.split('T')[0]}</p>
            <p>{post.description}</p>
            <hr />
          </div>
        );
      })}
    </>
  );
}
