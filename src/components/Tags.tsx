import { PostTags } from '../types/post';
import { Badge } from './Badge';

export const Tags = ({
  tags,
  selected,
  onClick,
}: {
  tags: PostTags[];
  selected?: PostTags;
  onClick?: (tag: PostTags) => void;
}) => {
  return (
    <>
      {tags.map((tag) => {
        return (
          <Badge
            selected={selected === tag}
            onClick={
              onClick
                ? () => {
                    onClick(tag);
                  }
                : undefined
            }
          >
            {tag}
          </Badge>
        );
      })}
    </>
  );
};
