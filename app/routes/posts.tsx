import { Outlet } from '@remix-run/react';
import type {
  HeadersFunction,
  LinksFunction,
  LoaderFunction,
  MetaFunction,
} from '@remix-run/node';
import styles from 'highlight.js/styles/github-dark.css';
import { getPosts } from '../utils/posts';
import * as notFound from './posts/not-found.mdx';

export const handle = {
  canonical: (data: any) => {
    return data?.attributes?.canonical;
  },
};

export const links: LinksFunction = () => {
  return [
    {
      rel: 'stylesheet',
      href: styles,
    },
  ];
};

export const headers: HeadersFunction = ({ loaderHeaders }) => {
  return loaderHeaders;
};

export const meta: MetaFunction = ({ data }) => {
  if (!data || Object.keys(data).length === 0) {
    return {
      title: 'David Söderberg - Posts',
    };
  }
  const frontmatter = data.attributes;
  const title = `David Söderberg - ${frontmatter.title}`;
  return {
    title,
    'og:title': title,
    'og:image': frontmatter.image ? frontmatter.image : '/me.jpeg',
    description: frontmatter.description,
  };
};

export const loader: LoaderFunction = async ({ request }) => {
  const pathName = new URL(request.url).pathname;
  if (pathName === '/posts') {
    return {};
  }
  const slug = pathName.replace('/posts/', '');
  const post = getPosts().find((post) => post.slug === slug);
  if (!post) {
    return notFound;
  }
  return post;
};

export default function Posts() {
  return <Outlet />;
}
