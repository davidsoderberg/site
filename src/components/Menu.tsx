import { ReactNode } from 'react';
import { css, cx } from '../../styled-system/css';
import { PATHS } from '../routes';
import { DefaultProps } from '../types/defaultProps';
import { Card } from './Card';
import { Link } from './Link';
import { Row } from './Row';

const menuLink = css({
  fontSize: 'menu',
  fontWeight: 'bold',
});

const MenuSection = ({ children }: { children: ReactNode }) => {
  return (
    <Row
      className={css({
        gap: 200,
        xsDown: {
          justifyContent: 'space-between',
          width: '100%',
        },
      })}
    >
      {children}
    </Row>
  );
};

export const Menu = ({ className, style }: Omit<DefaultProps, 'children'>) => {
  return (
    <Card
      className={cx(
        css(
          {
            display: 'flex',
            flexDirection: 'row',
            backgroundColor: 'background',
            paddingTop: 100,
            paddingBottom: 100,
            paddingLeft: 150,
            paddingRight: 150,
            justifyContent: 'space-between',
            xsDown: {
              flexDirection: 'column',
              gap: 50,
            },
          },
          style
        ),
        className
      )}
    >
      <MenuSection>
        <Link href={PATHS.ROOT} className={menuLink}>
          Home
        </Link>
        <Link href={PATHS.POSTS} className={menuLink}>
          Posts
        </Link>
      </MenuSection>
      <MenuSection>
        <Link
          href='https://novu.co/'
          target='_blank'
          rel='noreferrer'
          className={menuLink}
        >
          Novu
        </Link>
        <Link
          href='https://github.com/davidsoderberg'
          target='_blank'
          rel='noreferrer'
          className={menuLink}
        >
          Github
        </Link>
      </MenuSection>
    </Card>
  );
};
