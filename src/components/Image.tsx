import { css } from '../../styled-system/css';

export const Image = ({ src, alt }: { src: string; alt?: string }) => {
  return (
    <img
      src={src}
      className={css({
        borderRadius: '8px',
        boxShadow: 'default',
      })}
      alt={alt}
    />
  );
};
