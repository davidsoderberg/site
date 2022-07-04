import type { LoaderFunction, MetaFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useMatches,
} from '@remix-run/react';
import { Wrapper } from './components/Wrapper';
import styles from './styles/index.css';
import Howis, { loader as howIsLoader } from './routes/howis';
import { When } from './components/When';
import { getConfig } from './utils/config.server';
import { getVisitId } from './utils/visit.server';
import { useEffect } from 'react';
import { admin } from './utils/admin.server';

export const links = () => [{ rel: 'stylesheet', href: styles }];

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'David Söderberg - Software Developer',
  viewport: 'width=device-width,initial-scale=1',
  description:
    'I am David and this is a website about me as a developer. I am currently working as a Software Engineer with a Typescript stack at @novuhq.',
});

export const loader: LoaderFunction = async ({request}) => {
  const url = request.url;
  const config = await getConfig();
  const { headers, id } = await getVisitId(request);
  const isAdmin = await admin(request);
  const res = await howIsLoader();
  const isHowIs = url.includes('howisdavid.com');
  return json(
    {
      ...res,
      url: config.URL,
      id,
      isAdmin,
      isHowIs
    },
    { headers }
  );
};

export default function App() {
  const data = useLoaderData();
  const matches = useMatches();
  const match = matches.find((match) => match.handle && match.handle.canonical);
  const canonical = match?.handle.canonical(match.data);

  useEffect(() => {
    if (!data.id) {
      return;
    }
    localStorage.setItem('visit-id', data.id);
  }, [data.id]);

  return (
    <html lang='en'>
      <head>
        <Meta />
        {!!canonical && <link rel='canonical' href={canonical} />}
        <Links />
      </head>
      <body>
        <Wrapper>
          <When truthy={data.isHowIs} fallback={<Outlet />}>
            <Howis />
          </When>
        </Wrapper>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
