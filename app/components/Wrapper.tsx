import { css, cx } from '../../styled-system/css';
import { DefaultProps } from '../types/defaultProps';
import { Box } from './Box';

export const Wrapper = ({ children, className }: DefaultProps) => {
  return (
    <Box
      className={css({
        backgroundColor: 'background',
        width: '100%',
        minHeight: '100vh',
        border: 'wrapper',
        borderColor: 'white',
        borderRadius: 'default',
        paddingBottom: 100,
        boxShadow: 'defaultInset',
        xsDown: {
          border: 'none',
          borderRadius: 0,
          boxShadow: 'none',
        },
      })}
    >
      <Box
        className={cx(
          css({
            width: '80%',
            margin: '0 auto',
            paddingBottom: 50,
            xsDown: {
              width: '100%',
              padding: 100,
            },
          }),
          className
        )}
      >
        {children}
      </Box>
    </Box>
  );
};
