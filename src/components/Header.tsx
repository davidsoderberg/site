import { Link } from 'react-router-dom';
import { css } from '../../styled-system/css';

export const Header = () => {
  return (
    <Link to='/'>
      <h1
        className={css({
          color: '#39d353',
          textAlign: 'center',
          lineHeight: '24px',
          fontSize: '32px',
          fontWeight: 700,
          margin: '16px 0',
        })}
      >
        David Söderberg
      </h1>
    </Link>
  );
};
