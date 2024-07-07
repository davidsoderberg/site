import { css, cx } from '../../styled-system/css';
import { DefaultProps } from '../types/defaultProps';

export const Badge = ({
  style,
  className,
  children,
  onClick,
  selected = false,
}: DefaultProps & { onClick?: () => void; selected?: boolean }) => {
  return (
    <button
      aria-selected={selected}
      className={cx(
        css(
          {
            backgroundColor: 'primary',
            borderRadius: 'badge',
            color: 'background',
            fontSize: 'badge',
            padding: 25,
            paddingLeft: 50,
            paddingRight: 50,
            fontWeight: 'bolder',
            boxShadow: 'default',
            _selected: {
              background: 'card',
              color: 'primary',
            },
          },
          style
        ),
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
