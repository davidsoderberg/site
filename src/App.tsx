import { Header } from './components/Header';
import { Post } from './components/Post';

function App() {
  return (
    <Header>
      <Post
        to='/which-day-is-your-favorite'
        title='Which day is your favorite?'
        excerpt='1 year and 4 months since last post :O'
        date='2024-07-05'
        selected={true}
      />
      <Post
        to={'/two-times-in-israel-part-2'}
        title={'Two times in Israel (part 2)'}
        excerpt={
          'Amazing week in Israel... Welcome to Israel. Your life will never be the same.'
        }
        date={'2023-02-05'}
      />
      <Post
        to={'/two-times-in-israel-part-1'}
        title={'Two times in Israel (part 1)'}
        excerpt={
          'Amazing week in Israel... Welcome to Israel. Your life will never be the same.'
        }
        date={'2023-02-04'}
      />
      <Post
        to={'/a-week-in-cyprus-with-novu'}
        title={'A week in Cyprus with Novu'}
        excerpt={'An amazing week that I will never forget.'}
        date={'2022-09-17'}
      />
      <Post
        to={'/five-months-of-remote-work'}
        title={'Five months of remote work'}
        excerpt={'How my first five months at Novu have been this far...'}
        date={'2022-08-31'}
      />
      <Post
        to={'/first-two-months'}
        title={'The first two months at Novu'}
        excerpt={'About my two first month at Novu.'}
        date={'2022-06-01'}
      />
      <Post
        to={'/the-first-swedish-guy-at-novu'}
        title={'The first Swedish guy at Novu'}
        excerpt={'About how I ended up at Novu after a few video calls.'}
        date={'2022-04-05'}
      />
    </Header>
  );
}

export default App;
