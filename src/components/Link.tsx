import { ReactNode } from 'react';
import { css } from '../../styled-system/css';

export const Link = ({
  children,
  href,
}: {
  children: ReactNode;
  href: string;
}) => {
  return (
    <a
      href={href}
      className={css({
        color: 'primary',
      })}
    >
      {children}
    </a>
  );
};
