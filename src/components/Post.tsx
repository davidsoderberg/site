import { useMemo } from 'react';
import { Styles, css, cx } from '../../styled-system/css';
import { Card } from './Card';
import { Date } from './Date';
import { Heading } from './Heading';
import { Link } from './Link';
import { Text } from './Text';
import { pages } from '../routes';
import { Post as IPost } from '../types/post';

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
  className,
  style,
  selected = false,
  hide = false,
}: {
  to: string;
  hide?: boolean;
  selected?: boolean;
  className?: string;
  style?: Styles;
}) => {
  const { title, date, excerpt }: IPost = useMemo(() => {
    return pages.find((route) => route.path === to) as IPost;
  }, [to]);

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
