import { Link } from '@remix-run/react';
import type { MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => ({
  title: 'David Söderberg - Posts',
});

export default function posts() {
  return (
    <>
      <h2>
        <Link
          style={{ textDecoration: 'none' }}
          to='/posts/the-first-swedish-guy-at-novu'
        >
          The first Swedish guy at Novu
        </Link>
      </h2>
      <p>2022-05-04</p>
      <hr />
    </>
  );
}
