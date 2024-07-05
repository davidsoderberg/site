import { css } from '../../styled-system/css';
import { Date } from './Date';
import { Heading } from './Heading';
import { Link } from './Link';
import { Text } from './Text';

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

  return (
    <div
      {...(selected ? { 'aria-selected': true } : {})}
      className={css({
        borderBottom: '1px solid',
        borderColor: 'border',
        marginBottom: '16px',
        padding: '8px 16px',
        '&:last-of-type': {
          borderBottom: 'none',
          marginBottom: 0,
        },
        _selected: {
          backgroundColor: 'selectedPost',
          borderRadius: '8px',
          borderBottom: 'none',
          boxShadow: 'default',
        },
      })}
    >
      <Heading>
        <Link href={to}>{title}</Link>
      </Heading>
      <Date>{date}</Date>
      <Text>{excerpt}</Text>
    </div>
  );
};
