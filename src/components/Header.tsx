import { css, cx } from '../../styled-system/css';
import { DefaultProps } from '../types/defaultProps';
import { Card } from './Card';
import { hstack } from '../../styled-system/patterns';
import { Link } from './Link';

export const Header = ({ children, className, style }: DefaultProps) => {
  return (
    <div>
      <Link href='/'>
        <h1
          className={cx(
            css(
              {
                color: 'primary',
                textAlign: 'center',
                lineHeight: 'large',
                fontSize: 'header',
                fontWeight: 700,
                paddingTop: 200,
                marginBottom: 200,
              },
              style
            ),
            className
          )}
        >
          David Söderberg
        </h1>
      </Link>
      <Card
        className={css({
          backgroundColor: 'transparent',
        })}
      >
        <div
          className={hstack({
            padding: 50,
            justifyContent: 'space-between',
          })}
        >
          <div
            className={hstack({
              fontSize: 'small',
              gap: 200,
            })}
          >
            <Link href='/'>Home</Link>
            <Link href='/posts'>Posts</Link>
          </div>
          <div
            className={hstack({
              fontSize: 'small',
              gap: 200,
            })}
          >
            <Link href='https://novu.co/' target='_blank' rel='noreferrer'>
              Novu
            </Link>
            <Link
              href='https://github.com/davidsoderberg'
              target='_blank'
              rel='noreferrer'
            >
              Github
            </Link>
          </div>
        </div>
      </Card>
      {children}
    </div>
  );
};
