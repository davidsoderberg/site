import { MouseEventHandler } from 'react';
import { css, cx } from '../../styled-system/css';
import { DefaultProps } from '../types/defaultProps';

export const Link = ({
  children,
  href,
  className,
  style,
  target,
  rel,
  onClick,
}: DefaultProps & {
  href: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
  rel?: string;
  onClick?: MouseEventHandler;
}) => {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      onClick={onClick}
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
