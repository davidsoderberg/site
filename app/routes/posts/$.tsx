import type { LoaderFunction, MetaFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { useMemo } from 'react';
import { getMDXComponent } from 'mdx-bundler/client';
import { compileMdx } from '../../utils/mdx.server';
import styles from 'highlight.js/styles/github-dark.css';

export const links = () => {
  return [
    {
      rel: 'stylesheet',
      href: styles,
    },
  ];
};

export const meta: MetaFunction = ({ data }) => {
  return data.frontmatter.meta;
};

export const loader: LoaderFunction = async ({ params }) => {
  return compileMdx(params['*'] + '.mdx');
};

export default function Post() {
  const { code } = useLoaderData();
  const Component = useMemo(() => getMDXComponent(code), [code]);
  return <Component />;
}
