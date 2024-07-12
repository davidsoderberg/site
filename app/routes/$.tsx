import { Header } from '../components/Header';
import { PageHeader } from '../components/PageHeader';
import { LatestPost } from '../components/LatestPost';
import { Bold } from '../components/Bold';
import { css } from '../../styled-system/css';

export const CatchAll = () => {
  return (
    <Header>
      <PageHeader className={css({ marginTop: 200 })}>404 not found</PageHeader>
      <Bold>I recommend that you read my latest post:</Bold>
      <LatestPost />
    </Header>
  );
};

export default CatchAll;
