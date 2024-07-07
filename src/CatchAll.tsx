import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Header } from './components/Header';
import { Heading } from './components/Heading';
import { Text } from './components/Text';
import { LatestPost } from './components/LatestPost';
import { PATHS, pages } from './routes';

export const CatchAll = () => {
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    let path = params['*'];
    path = PATHS.POSTS + '/' + path;

    const found = pages.find((page) => page.path === path);

    if (!found) {
      return;
    }

    navigate(path);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Header>
      <Heading style={{ marginTop: 200 }}>404 not found</Heading>
      <Text style={{ fontWeight: 'bolder' }}>
        I recommend that you read my latest post:
      </Text>
      <LatestPost />
    </Header>
  );
};
