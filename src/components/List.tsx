import { ReactNode } from 'react';
import { css, cx } from '../../styled-system/css';

const className = css({
  marginLeft: '16px',
  marginBottom: '16px',
  color: 'white',
  '& > li': {
    marginBottom: '8px',
  },
});

export const List = ({
  children,
  variant = 'unordered',
}: {
  children: ReactNode;
  variant?: 'ordered' | 'unordered';
}) => {
  if (variant === 'ordered') {
    return (
      <ol
        className={cx(
          className,
          css({
            listStyleType: 'decimal',
          })
        )}
      >
        {children}
      </ol>
    );
  }

  return (
    <ul
      className={cx(
        className,
        css({
          listStyleType: 'disc',
        })
      )}
    >
      {children}
    </ul>
  );
};
