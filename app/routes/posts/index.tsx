import { Link, useLoaderData } from '@remix-run/react';
import type { LoaderFunction, MetaFunction } from '@remix-run/node';
import * as firstPost from './the-first-swedish-guy-at-novu.mdx';

function postFromModule(mod) {
  return {
    slug: mod.filename.replace(/\.mdx?$/, ''),
    ...mod.meta,
    title: mod.attributes.title
  };
}

export const loader: LoaderFunction = () => {
  return [postFromModule(firstPost)];
};

export const meta: MetaFunction = () => ({
  title: 'David Söderberg - Posts',
});

export default function posts() {
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
