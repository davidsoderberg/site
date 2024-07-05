import { css, cx } from '../../styled-system/css';
import { DefaultProps } from '../types/defaultProps';

const defaultClassName = css({
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
  className,
  style,
}: DefaultProps & {
  variant?: 'ordered' | 'unordered';
}) => {
  if (variant === 'ordered') {
    return (
      <ol
        className={cx(
          defaultClassName,
          css(
            {
              listStyleType: 'decimal',
            },
            style
          ),
          className
        )}
      >
        {children}
      </ol>
    );
  }

  return (
    <ul
      className={cx(
        defaultClassName,
        css(
          {
            listStyleType: 'disc',
          },
          style
        ),
        className
      )}
    >
      {children}
    </ul>
  );
};
