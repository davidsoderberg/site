import type { LoaderFunction, MetaFunction } from '@remix-run/node';
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
import styles from './index.css';
import Howis, { loader as howIsLoader } from './routes/howis';
import { When } from './components/When';

export const links = () => [{ rel: 'stylesheet', href: styles }];

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'David Söderberg - Software Developer',
  viewport: 'width=device-width,initial-scale=1',
  description:
    'I am David and this is a website about me as a developer. I am currently working as a Software Engineer with a Typescript stack at @novuhq.',
});

export const loader: LoaderFunction = async (args) => {
  const url = args.request.url;
  if(url.includes('howisdavid.com')) {
    return howIsLoader();
  }
  return null;
}

export default function App() {
  const data = useLoaderData();
  const matches = useMatches();
  const match = matches.find((match) => match.handle && match.handle.canonical);
  const canonical = match?.handle.canonical(match.data);

  return (
    <html lang='en'>
      <head>
        <Meta />
        {!!canonical && <link rel='canonical' href={canonical} />}
        <Links />
      </head>
      <body>
        <Wrapper>
          <When truthy={data !== null} fallback={<Outlet />}>
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
