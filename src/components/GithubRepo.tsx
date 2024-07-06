import { Link } from './Link';
import { Image } from './Image';

export const GithubRepo = ({
  username = 'davidsoderberg',
  repo,
  alt,
}: {
  username?: string;
  repo: string;
  alt: string;
}) => {
  return (
    <Link
      href={`https://github.com/${username}/${repo}`}
      target='_blank'
      rel='noreferrer'
    >
      <Image
        src={`https://github-readme-stats-delta-ebon-21.vercel.app/api/pin/?username=${username}&repo=${repo}&theme=dark&bg_color=2A303C&text_color=fff`}
        alt={alt}
        style={{ borderRadius: 'none' }}
      />
    </Link>
  );
};
