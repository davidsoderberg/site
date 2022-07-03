import { useLoaderData } from '@remix-run/react';

export const Logo = () => {
  const { url } = useLoaderData();
  return (
    <h1 style={{ textAlign: 'center' }}>
      <a href={url} style={{ textDecoration: 'none' }}>
        David Söderberg
      </a>
    </h1>
  );
};
