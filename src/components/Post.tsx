import { useMemo } from 'react';
import { Styles, css, cx } from '../../styled-system/css';
import { Card } from './Card';
import { Link } from './Link';
import { Text } from './Text';
import { pages } from '../routes';
import { Post as IPost, PostTags } from '../types/post';
import { Tags } from './Tags';
import { When } from './When';
import { Divider } from './Divider';
import { Bold } from './Bold';
import { SectionHeader } from './SectionHeader';
import { Row } from './Row';

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
    <SectionHeader>
      <Link href={to}>{title}</Link>
    </SectionHeader>
    <Bold>{date}</Bold>
    <Text>{excerpt}</Text>
    <Row
      className={css({
        marginBottom: 100,
      })}
    >
      <Tags tags={tags} />
    </Row>
  </>
);

export const Post = ({
  to,
  className,
  style,
  selected = false,
  hide = false,
  isLast = false,
}: {
  to: string;
  hide?: boolean;
  selected?: boolean;
  className?: string;
  style?: Styles;
  isLast?: boolean;
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
            paddingTop: 50,
            paddingBottom: 50,
            paddingLeft: 100,
            paddingRight: 100,
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
      <When truthy={!isLast}>
        <Divider style={{ marginTop: 200, marginBottom: 0 }} />
      </When>
    </div>
  );
};
