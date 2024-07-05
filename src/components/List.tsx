import { css, cx } from '../../styled-system/css';
import { DefaultProps } from '../types/defaultProps';

const defaultClassName = css({
  marginLeft: 100,
  marginBottom: 100,
  color: 'white',
  '& > li': {
    marginBottom: 50,
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
