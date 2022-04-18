import { Link, useLoaderData } from '@remix-run/react';
import type { LoaderFunction, MetaFunction } from '@remix-run/node';
import { posts as postslist } from './list';

const postFromModule = (mod) => ({
  slug: mod.filename.replace(/\.mdx?$/, ''),
  ...mod.meta,
  ...mod.attributes,
});

export const loader: LoaderFunction = () => {
  return postslist
    .map((post) => postFromModule(post))
    .filter((post) => post.list);
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
