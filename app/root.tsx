import type { MetaFunction } from '@remix-run/node';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import { Wrapper } from './components/Wrapper';
import styles from './index.css';

export const links = () => [{ rel: 'stylesheet', href: styles }];

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'David Söderberg - Software Developer',
  viewport: 'width=device-width,initial-scale=1',
});

export default function App() {
  return (
    <html lang='en'>
      <head>
        <Meta />
        <Links />
        <script>
          var hsscript = document.createElement("script"); hsscript.src =
          "https://cdn.jsdelivr.net/npm/hockeystack@latest/hockeystack.min.js";
          hsscript.async = 1; hsscript.dataset.apikey =
          "fed1181f4d796883b46992336ef0c0"; hsscript.dataset.cookieless = 1;
          document.getElementsByTagName('head')[0].append(hsscript);
        </script>
      </head>
      <body>
        <Wrapper>
          <Outlet />
        </Wrapper>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
