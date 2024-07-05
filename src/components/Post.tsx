import { css } from '../../styled-system/css';
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
  selected = false,
  hide = false,
}: {
  to: string;
  title: string;
  excerpt: string;
  date: string;
  hide?: boolean;
  selected?: boolean;
}) => {
  if (hide) {
    return null;
  }

  if (selected) {
    return (
      <Card>
        <PostContent to={to} title={title} excerpt={excerpt} date={date} />
      </Card>
    );
  }

  return (
    <div
      className={css({
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
      })}
    >
      <PostContent to={to} title={title} excerpt={excerpt} date={date} />
    </div>
  );
};
