import type {
  HeadersFunction,
  LinksFunction,
  LoaderFunction,
  MetaFunction,
} from '@remix-run/node';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { compileMdx, getNotFound } from '../../utils/mdx.server';
import styles from 'highlight.js/styles/github-dark.css';
import { MDX } from '../../components/Mdx';

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

export const meta: MetaFunction = ({ data: { frontmatter } }) => {
  const title = `David Söderberg - ${frontmatter.title}`;
  return {
    title,
    'og:title': title,
    'og:image': frontmatter.image ? frontmatter.image : '/me.jpeg',
    description: frontmatter.description,
  };
};

export const loader: LoaderFunction = async ({ params, request }) => {
  const url = new URL(request.url);
  const searchParams = url.searchParams;
  const preview = searchParams.get('preview');
  
  let mdx = await compileMdx(params['*'] + '.mdx');
  if(!mdx.frontmatter.list && !preview) {
    mdx = await getNotFound();
  }  
  const status = mdx.frontmatter.status ? mdx.frontmatter.status : 200;
  return json(mdx, {
    status: status,
    headers: {
      'Cache-Control': `max-age=${status === 200 ? 86400 : 0}`,
    },
  });
};

export default function Post() {
  const { code, frontmatter } = useLoaderData();
  return (
    <>
      <h2>{frontmatter.title}</h2>
      <p>{frontmatter.date.split('T')[0]}</p>
      <MDX code={code} />
    </>
  );
}
