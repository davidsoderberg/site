import { Outlet } from '@remix-run/react';
import styles from 'highlight.js/styles/github-dark.css';

export const links = () => {
  return [
    {
      rel: 'stylesheet',
      href: styles,
    },
  ];
};

export default function Posts() {
  return <Outlet />;
}