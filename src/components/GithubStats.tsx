import { Image } from './Image';
import { Link } from './Link';

export const GithubStats = () => {
  return (
    <Link
      href='https://github.com/davidsoderberg'
      target='_blank'
      rel='noreferrer'
    >
      <Image
        src='https://github-readme-stats-delta-ebon-21.vercel.app/api?username=davidsoderberg&count_private=true&theme=dark&show_icons=true&bg_color=2A303C&text_color=fff&hide_border=true'
        alt='GitHub stats'
      />
    </Link>
  );
};
