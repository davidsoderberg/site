import type {
  HeadersFunction,
  LinksFunction,
  LoaderFunction,
  MetaFunction,
} from '@remix-run/node';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { compileMdx, getNotFound, mdx } from '../../utils/mdx.server';
import styles from 'highlight.js/styles/github-dark.css';
import { MDX } from '../../components/Mdx';
import { getConfig } from '../../utils/config.server';

export const handle = {
  getSitemapEntries: async () => {
    const posts = (await mdx()).filter((post) => post.list);
    posts.sort((a, z) => {
      const aTime = new Date(a.date).getTime();
      const zTime = new Date(z.date).getTime();
      return aTime > zTime ? -1 : aTime === zTime ? 0 : 1;
    });

    return posts.map((page) => {
      return { route: `/posts/${page.slug}`, priority: 0.6 };
    });
  },
  canonical: (data: any) => {
    return data?.frontmatter?.canonical;
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
  const config = await getConfig();
  const url = new URL(request.url);
  const searchParams = url.searchParams;
  const preview = searchParams.get('preview') === config.PREVIEW_SECRET;

  let mdx = await compileMdx(params['*'] + '.mdx');
  if (!mdx.frontmatter.list && !preview) {
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
