import { css, cx } from '../../styled-system/css';
import { DefaultProps } from '../types/defaultProps';

export const Link = ({
  children,
  href,
  className,
  style,
  target,
  rel,
}: DefaultProps & {
  href: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
  rel?: string;
}) => {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
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
