import { Link } from 'react-router-dom';
import { css } from '../../styled-system/css';
import { ReactNode } from 'react';

export const Header = ({ children = null }: { children?: ReactNode }) => {
  return (
    <div>
      <Link to='/'>
        <h1
          className={css({
            color: 'primary',
            textAlign: 'center',
            lineHeight: '24px',
            fontSize: '32px',
            fontWeight: 700,
            paddingTop: '32px',
            marginBottom: '32px',
          })}
        >
          David Söderberg
        </h1>
      </Link>
      {children}
    </div>
  );
};
