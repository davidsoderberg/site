import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import { Wrapper } from './components/Wrapper';
import { Analytics } from './components/Analytics';
import './index.css';
import { MetaFunction } from '@remix-run/node';
import { CATCH_ALL, routes } from './routes';

export const meta: MetaFunction = ({ location: { pathname } }) => {
  const {
    title,
    description = 'I am David and this is a website about me as a developer. I am currently working as a Software Engineer with a Typescript stack at @novuhq.',
    image = 'me.jpeg',
    keywords = [],
    tags = [],
  } = routes.find((route) => route.path === pathname) || CATCH_ALL;

  const imageLink = `https://www.davidsouthmountain.se/${image}`;

  const fullTitle = `David Söderberg | ${title}`;

  return [
    { title: fullTitle },
    {
      name: 'description',
      content: description,
    },
    {
      property: 'og:locale',
      content: 'en_US',
    },
    {
      property: 'og:title',
      content: fullTitle,
    },
    {
      property: 'og:description',
      content: description,
    },
    {
      property: 'og:image',
      content: imageLink,
    },
    {
      name: 'keywords',
      content: [...keywords, ...tags].join(', ')
    },
    {
      property: 'twitter:title',
      content: fullTitle,
    },
    {
      property: 'twitter:description',
      content: description,
    },
    {
      property: 'twitter:image',
      content: imageLink,
    },
  ];
};

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <Meta />
        <Links />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <Wrapper>{children}</Wrapper>
        <ScrollRestoration />
        <Scripts />
        <Analytics />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
