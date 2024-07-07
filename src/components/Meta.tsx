import { Helmet } from 'react-helmet';
import { ReactNode, useMemo } from 'react';

export const Meta = ({
  children = null,
  title = 'Software Developer',
  description = 'I am David and this is a website about me as a developer. I am currently working as a Software Engineer with a Typescript stack at @novuhq.',
  image = 'me.jpeg',
}: {
  description?: string;
  image?: string;
  title?: string;
  children?: ReactNode;
}) => {
  const imageLink = useMemo(
    () => `https://www.davidsouthmountain.se/${image}`,
    [image]
  );
  const fullTitle = useMemo(() => `David Söderberg | ${title}`, [title]);

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name='description' content={description} />
      <meta property='og:locale' content='en_US' />
      <meta property='og:title' content={fullTitle} />
      <meta property='og:description' content={description} />
      <meta property='og:image' content={imageLink} />
      <meta name='twitter:title' content={fullTitle} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:image' content={imageLink} />
      {children}
    </Helmet>
  );
};
