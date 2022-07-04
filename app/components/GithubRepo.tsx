export const GithubRepo = ({username, repo, alt}) => {
  return (
    <a
      href={`https://github.com/${username}/${repo}`}
      target='_blank'
      rel='noreferrer'
    >
      <img
        src={`https://github-readme-stats-delta-ebon-21.vercel.app/api/pin/?username=${username}&repo=${repo}&theme=dark&bg_color=2A303C&text_color=fff`}
        alt={alt}
      />
    </a>
  );
};
