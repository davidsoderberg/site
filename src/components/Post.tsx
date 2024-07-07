import { useMemo } from 'react';
import { Styles, css, cx } from '../../styled-system/css';
import { Card } from './Card';
import { Date } from './Date';
import { Heading } from './Heading';
import { Link } from './Link';
import { Text } from './Text';
import { pages } from '../routes';
import { Post as IPost, PostTags } from '../types/post';
import { Tags } from './Tags';
import { hstack } from '../../styled-system/patterns';

const PostContent = ({
  to,
  title,
  excerpt,
  date,
  tags = [],
}: {
  to: string;
  title: string;
  excerpt: string;
  date: string;
  tags?: PostTags[];
}) => (
  <>
    <Heading>
      <Link href={to}>{title}</Link>
    </Heading>
    <Date>{date}</Date>
    <Text>{excerpt}</Text>
    <div
      className={hstack({
        marginBottom: 100,
      })}
    >
      <Tags tags={tags} />
    </div>
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
  const { title, date, excerpt, tags }: IPost = useMemo(() => {
    return pages.find((route) => route.path === to) as IPost;
  }, [to]);

  if (hide) {
    return null;
  }

  if (selected) {
    return (
      <Card className={className} style={style}>
        <PostContent
          tags={tags}
          to={to}
          title={title}
          excerpt={excerpt}
          date={date}
        />
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
      <PostContent
        tags={tags}
        to={to}
        title={title}
        excerpt={excerpt}
        date={date}
      />
    </div>
  );
};
