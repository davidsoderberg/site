import { css, cx } from '../../styled-system/css';
import { DefaultProps } from '../types/defaultProps';

export const Link = ({
  children,
  href,
  className,
  style,
}: DefaultProps & {
  href: string;
}) => {
  return (
    <a
      href={href}
      className={cx(
        css(
          {
            color: 'primary',
          },
          style
        ),
        className
      )}
    >
      {children}
    </a>
  );
};
