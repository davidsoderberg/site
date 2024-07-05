import { css } from '../../styled-system/css';

export const Divider = () => {
  return (
    <hr
      className={css({
        borderColor: 'border',
        marginBottom: '16px',
      })}
    />
  );
};
