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
                lineHeight: 'large',
                fontSize: 'header',
                fontWeight: 700,
                paddingTop: 200,
                marginBottom: 200,
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
