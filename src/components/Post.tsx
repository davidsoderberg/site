import { Styles, css, cx } from '../../styled-system/css';
import { Card } from './Card';
import { Date } from './Date';
import { Heading } from './Heading';
import { Link } from './Link';
import { Text } from './Text';

const PostContent = ({
  to,
  title,
  excerpt,
  date,
}: {
  to: string;
  title: string;
  excerpt: string;
  date: string;
}) => (
  <>
    {' '}
    <Heading>
      <Link href={to}>{title}</Link>
    </Heading>
    <Date>{date}</Date>
    <Text>{excerpt}</Text>
  </>
);

export const Post = ({
  to,
  title,
  excerpt,
  date,
  className,
  style,
  selected = false,
  hide = false,
}: {
  to: string;
  title: string;
  excerpt: string;
  date: string;
  hide?: boolean;
  selected?: boolean;
  className?: string;
  style?: Styles;
}) => {
  if (hide) {
    return null;
  }

  if (selected) {
    return (
      <Card className={className} style={style}>
        <PostContent to={to} title={title} excerpt={excerpt} date={date} />
      </Card>
    );
  }

  return (
    <div
      className={cx(
        css(
          {
            borderBottom: 'post',
            borderColor: 'border',
            marginBottom: 100,
            paddingTop: 50,
            paddingBottom: 50,
            paddingLeft: 100,
            paddingRight: 100,
            '&:last-of-type': {
              borderBottom: 'none',
              marginBottom: 0,
            },
          },
          style
        ),
        className
      )}
    >
      <PostContent to={to} title={title} excerpt={excerpt} date={date} />
    </div>
  );
};
