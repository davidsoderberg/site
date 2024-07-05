import { Helmet } from 'react-helmet';
import { ReactNode } from 'react';

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
  return (
    <Helmet>
      <title>David Söderberg | {title}</title>
      <meta name='description' content={description} />
      <meta
        property='og:image'
        content={`https://www.davidsouthmountain.se/${image}`}
      />
      {children}
    </Helmet>
  );
};
