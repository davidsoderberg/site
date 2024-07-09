import { css, cx } from '../../styled-system/css';
import { DefaultProps } from '../types/defaultProps';

export const Image = ({
  src,
  alt,
  className,
}: Omit<DefaultProps<{ src: string; alt?: string }>, 'children'>) => {
  return (
    <img
      src={src}
      className={cx(
        css({
          borderRadius: 'default',
          boxShadow: 'default',
        }),
        className
      )}
      alt={alt}
    />
  );
};
