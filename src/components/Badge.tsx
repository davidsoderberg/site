import { css, cx } from '../../styled-system/css';
import { DefaultProps } from '../types/defaultProps';

export const Badge = ({
  className,
  children,
  onClick,
  selected = false,
}: DefaultProps & { onClick?: () => void; selected?: boolean }) => {
  return (
    <button
      {...(onClick !== undefined ? { 'data-active': true } : {})}
      aria-selected={selected}
      className={cx(
        css({
          backgroundColor: 'primary',
          borderRadius: 'default',
          color: 'background',
          fontSize: 'badge',
          padding: 25,
          paddingLeft: 50,
          paddingRight: 50,
          fontWeight: 'bold',
          boxShadow: 'default',
          _selected: {
            background: 'card',
            color: 'primary',
          },
          _active: {
            cursor: 'pointer',
          },
        }),
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
