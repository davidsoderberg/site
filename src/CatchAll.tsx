import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Header } from './components/Header';
import { PageHeader } from './components/PageHeader';
import { LatestPost } from './components/LatestPost';
import { PATHS } from './routes';
import { Bold } from './components/Bold';
import { findPost } from './hooks/usePost';
import { Post } from './types/post';

export const CatchAll = () => {
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    let path = params['*'];
    path = PATHS.POSTS + '/' + path;

    const found = findPost(path) as Post | undefined;

    if (!found) {
      return;
    }

    navigate(path);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Header>
      <PageHeader style={{ marginTop: 200 }}>404 not found</PageHeader>
      <Bold>I recommend that you read my latest post:</Bold>
      <LatestPost />
    </Header>
  );
};
