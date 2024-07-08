import { css } from '../../styled-system/css';
import { Divider } from '../components/Divider';
import { PostWrapper } from '../components/PostWrapper';
import { Quote } from '../components/Quote';
import { Text } from '../components/Text';

export const WhichDayIsYourFavorite = () => {
  return (
    <PostWrapper>
      <Text>
        1 year and 4 months since last post, time passes really quickly. Two
        offsites and a lot of code have been done during that time.
      </Text>
      <Text>
        The Saturday of seven of October 2023 I woke up to the news of that
        Israel had been attacked with 5000 missiles. Less than an hour later I
        sent a message to all my friends and co workers in Israel to see that
        they was alive and okay. About two hours later had I heard from everyone
        that they was okay, those two hours was for sure the two longest hour
        and worse hours in my life. Are they alive and will there be a work to
        go to on Monday, was two of many thoughts that went thru my head during
        does two hours.
      </Text>
      <Text>
        One month later exactly was I supposed to travel to Israel again, well
        that did not happen because of what happened a month earlier and I have
        not been there yet. I was supposed to stay there a week so on the 14 of
        November I wrote this:
      </Text>
      <Quote>
        <Text
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
        </Text>
        <Text
          className={css({
            marginTop: 100,
          })}
        >
          Today I am thinking about when I can go to Israel next, the question
          is not if but when I will go. Taking the position I have today was far
          from obvious or risk-free, but today my colleagues and friends in
          Israel mean more than I could have ever believed in December almost
          two years ago.
        </Text>
        <Text>
          My job is not always gold and green forests but I have a hard time
          seeing the grass being greener anywhere else. Before I thought that
          the Swedish border constituted the framework for where I can work,
          today I know that this is not the case.
        </Text>
        <Text>
          Tonight I'm in Copenhagen and tomorrow I might be in Portugal, who
          knows. My world is so much bigger today and people on the other side
          of the world even if it's just the other side of the equator are more
          like us than many believe/say. The colleagues I have today have proven
          that to me and for that I am eternally grateful to them, but they will
          also be my friends for the rest of my life.
        </Text>
      </Quote>
      <Text>
        As I said two offsites have passed and a lot of co workers have been
        hiried and some have already left as well. We have shaped into two
        development teams with different co workers two times and the last time
        happened about a month ago.
      </Text>
      <Text>
        For me this have been rough, first going from being one of "the"
        developers to being "just" a developer, but also I feel more isolated
        than before. I feel like there is no team feeling and I feel no team
        belonging. I thought this would change after the offsite but it did not,
        it just got worse instead it feels like.
      </Text>
      <Text>
        I left my previous company in a role that was a very social and I feelt
        a strong team feeling so I know it can be a comparision that my head do
        unknowingly. This is something that makes work just work for me right
        now. Those of you that have known me for the last 8-10 years know that
        programming and my work is/was a big part of me and my life. So these
        feelings I have right now is hard for me to handle.
      </Text>
      <Divider />
      <Text>
        Another thing that have happend since my last post and is on a more
        personal note. In February took I the courage to contact a CrossFit box
        (gym) to start doing CrossFit workouts for real. A lot of ghost thoughts
        is behind this, I have never really been fit and have always been
        thinking of people judging me for anything I do when it comes to working
        out.
      </Text>
      <Text>
        But a short meeting with the owner of the box, resulted in that I have
        now done 12 workouts with a personal trainer. Two weeks ago I decided to
        leave my current gym fully and instead get planned workouts from the
        personal trainer that I can do in the box by myself.
      </Text>
      <Text>
        I was so scared/nervous that I had to cancel the first time because my
        head and stomach could not handle it. Second time I forced myself to
        think of other things all day until I was outside of the box.
      </Text>
      <Text>
        Days when I have these workouts scheduled, is now my favorite days. It
        can be a Monday or Friday, it does not matter. My favorite thing and day
        is not related to what I am working with anymore and that is also a bit
        scary for me.
      </Text>
      <Text>
        I think it is a good thing in the end, now I have something else than
        work or programming that makes me wake up in the morning and gives me
        the feeling of that today will be a great day.
      </Text>
      <Text className={css({ marginTop: 200 })}>
        I look bright at the future, I don't know what it will contain more than
        workouts that I now feel more dedicated to than ever and more challenges
        in Novu and my career. I am not scared of the future because I have a
        plan for the near future and I know I will come up with or have a plan
        for the next near future when the near future have passed. Is it
        confusing? Well my brain is confused right now so this might be to.
      </Text>
    </PostWrapper>
  );
};
