import { Link } from 'react-router-dom';
import { css, cx } from '../../styled-system/css';
import { DefaultProps } from '../types/defaultProps';

export const Header = ({ children, className, style }: DefaultProps) => {
  return (
    <div>
      <Link to='/'>
        <h1
          className={cx(
            css(
              {
                color: 'primary',
                textAlign: 'center',
                lineHeight: '24px',
                fontSize: '32px',
                fontWeight: 700,
                paddingTop: '32px',
                marginBottom: '32px',
              },
              style
            ),
            className
          )}
        >
          David Söderberg
        </h1>
      </Link>
      {children}
    </div>
  );
};
