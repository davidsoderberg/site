import { css, cx } from '../../styled-system/css';
import { DefaultProps } from '../types/defaultProps';
import { Link } from './Link';
import { PATHS } from '../routes';
import { Menu } from './Menu';

export const Header = ({ children, className, style }: DefaultProps) => {
  return (
    <>
      <Link href={PATHS.ROOT}>
        <h1
          className={cx(
            css(
              {
                color: 'primary',
                textAlign: 'center',
                lineHeight: 'header',
                fontSize: 'header',
                fontWeight: 'bold',
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
      <Menu />
      {children}
    </>
  );
};
