import { css } from '../styled-system/css';
import { Header } from './components/Header';
import { Heading } from './components/Heading';

export const WhichDayIsYourFavorite = () => {
  return (
    <div>
      <Header />
      <Heading>Which day is your favorite?</Heading>
      2024-06-30
      <br />
      <p>
        1 year and 4 months since last post, time passed really quickly. Two
        offsites and a lot of code have been done during that time.
      </p>
      <p>
        The Saturday of seven of October 2023 I woke up to the news of that
        Israel had been attacked with 5000 missiles. Less then an hour later I
        sent a message to all my friends and co workers in Israel to see that
        they was alive and okay. About two hours later had I heard from everyone
        that they was okay, those two hours was for sure the two longest hour
        and worse hours in my life. Are they alive and will there be a work to
        go to on Monday, was two of many thoughts that went thru my head during
        does two hours.
      </p>
      <p>
        One month later exactly was I supposed to travel to Israel again, well
        that did not happen because of what happened a month earlier and I have
        not been there yet. I was supposed to stay there a week so on the 14 of
        November I wrote this:
      </p>
      <blockquote>
        <p
          className={css({
            display: 'inline',
          })}
        >
          Tonight I was supposed to come home from a week in Israel but due to
          the horrible attack by Hamas and the invasion of Gaza by Israel, that
          was not to be. Tonight I am staying at the hotel at Copenhagen Airport
          as it was not possible to cancel. On October 7, I wondered if my
          colleagues in Israel were alive and if there was a job to go to on
          Monday.
        </p>
        <p
          className={css({
            marginTop: '16px',
          })}
        >
          Today I am thinking about when I can go to Israel next, the question
          is not if but when I will go. Taking the position I have today is far
          from obvious or risk-free, but today my colleagues and friends in
          Israel mean more than I could have ever believed in December almost
          two years ago.
        </p>
        <p>
          My job is not always gold and green forests but I have a hard time
          seeing the grass being greener anywhere else. Before I thought that
          the Swedish border constituted the framework for where I can work,
          today I know that this is not the case.
        </p>
        <p>
          Tonight I'm in Copenhagen and tomorrow I might be in Portugal, who
          knows. My world is so much bigger today and people on the other side
          of the world even if it's just the other side of the equator are more
          like us than many believe/say. The colleagues I have today have proven
          that to me and for that I am eternally grateful to them, but they will
          also be my friends for the rest of my life.
        </p>
      </blockquote>
      <p>
        As I said two offsites have passed and a lot of co workers have been
        hiried and some have already left as well.
      </p>
    </div>
  );
};
