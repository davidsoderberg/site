import { Styles, css } from '../../styled-system/css';
import { Card } from './Card';
import { Link } from './Link';
import { Text } from './Text';
import { Tags } from './Tags';
import { When } from './When';
import { Divider } from './Divider';
import { Bold } from './Bold';
import { SectionHeader } from './SectionHeader';
import { Row } from './Row';
import { usePost } from '../hooks/usePost';

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
  const { title, date, excerpt, tags = [] } = usePost(to);

  if (hide) {
    return null;
  }

  return (
    <Card
      className={className}
      style={style}
      variant={selected ? 'default' : 'transparent'}
    >
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
      <When truthy={!isLast && !selected}>
        <Divider style={{ marginTop: 200, marginBottom: 0 }} />
      </When>
    </Card>
  );
};
