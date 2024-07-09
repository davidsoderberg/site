import { css } from '../../styled-system/css';
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
import { DefaultProps } from '../types/defaultProps';

export const Post = ({
  to,
  className,
  selected = false,
  hide = false,
  isLast = false,
}: {
  to: string;
  hide?: boolean;
  selected?: boolean;
  isLast?: boolean;
} & Pick<DefaultProps, 'className'>) => {
  const { title, date, excerpt, tags = [] } = usePost(to);

  if (hide) {
    return null;
  }

  return (
    <Card className={className} variant={selected ? 'default' : 'transparent'}>
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
        <Divider className={css({ marginTop: 200, marginBottom: 0 })} />
      </When>
    </Card>
  );
};
