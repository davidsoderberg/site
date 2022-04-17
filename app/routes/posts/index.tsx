import { Link } from '@remix-run/react';

export default function posts() {
  return (
    <>
      <h2>
        <Link to='/posts/the-first-swedish-guy-at-novu'>
          The first Swedish guy at Novu
        </Link>
      </h2>
      <p>2022-05-04</p>
      <hr />
    </>
  );
}
