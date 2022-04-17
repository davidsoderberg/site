import { Link } from '@remix-run/react';

export const Logo = () => (
  <h1 style={{ textAlign: 'center' }}>
    <Link to='/' style={{ textDecoration: 'none' }}>
      David Söderberg
    </Link>
  </h1>
);
