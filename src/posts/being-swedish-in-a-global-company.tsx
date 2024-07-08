import { css } from '../../styled-system/css';
import { hstack } from '../../styled-system/patterns';
import { Divider } from '../components/Divider';
import { Header } from '../components/Header';
import { PostHeader } from '../components/PostHeader';
import { Quote } from '../components/Quote';
import { Text } from '../components/Text';

export const BeingSwedishInAGlobalCompany = () => {
  return (
    <Header>
      <PostHeader />
      <Text>
        By now everyone reading these blog posts knows I am from Sweden and are
        living in the south part of Sweden. This is something I think about a
        lot, and I figured that I am doing/acting in some ways in different
        situations because I am Swedish.
      </Text>
      <Text>
        In this post, I will try to explain what my findings have been. I will
        also explain some of the Swedish terms of how Swedes are.
      </Text>
      <Text>
        Most Swedes have a hard time when someone stands out to much, and this
        is called the law of Jante. It's very famous in Sweden, and everyone
        knows about it. The rule basically is: don't think that you are anything
        special. This one, I think I follow very much, I do not get annoyed if
        some one stands out to much as what I have seen other Swedes do.
      </Text>
      <Text>
        But I try to think I am nothing special and try to not do things that do
        stand out. Even if other Swedes seems to think working for a global
        company is something special.
      </Text>
      <Text>
        Okay next one up is "vemod" or melancholy that might be the best
        translation for it. The word can be traced back to 1637 in written form.
        It describes a quiet feeling of loss and sadness over something that is
        felt to have disappeared and been lost. It refers to a hard courage and
        a sadness full of longing.
      </Text>
      <Text>
        My favorit artist Lars Winnerbäck describes this feeling in his lyrics
        and in the movie about him he says he thinks he have had it since he was
        a kid. That it just showed up inside of him one day.
      </Text>
      <Text>
        Here is some quotes from Lars song "I think I'll find home" that I think
        is great examples of the swedish "vemod".
      </Text>
      <div
        className={hstack({
          gap: 200,
          marginTop: 200,
          marginBottom: 200,
        })}
      >
        <Quote
          className={css({
            flex: 1,
          })}
        >
          <Text>
            It is dusk over Småland
            <br />
            We pass the giant Vist
            <br />
            A sea of fire above the sky
            <br />
            Like just now, it was gray and dreary
            <br />
            For half my life, for two decades
            <br />
            Have I traveled far and wide?
            <br />
            At dusk I have opened
            <br />
            At dawn I have closed
          </Text>
        </Quote>
        <Quote
          className={css({
            flex: 1,
          })}
        >
          <Text>
            I have seen friends walk into darkness
            <br />
            I have seen lies come to light
            <br />
            I have seen the parties in South
            <br />
            From both the treetops and the gravel
            <br />
            I'm not always who I want to be
            <br />
            I have disappointed a friend or two
            <br />
            I have escaped from all collectives
            <br />
            But swore now't sacred with the music
            <br />
          </Text>
        </Quote>
        <Quote
          className={css({
            flex: 1,
          })}
        >
          <Text>
            I have been hunting for pearls
            <br />
            After what makes me happy
            <br />
            I'm lugging around a piece of luggage
            <br />
            I drag around a facade
            <br />
            And if I had a dream
            <br />
            Was it a slow moving dream
            <br />
            Over fields and fields
            <br />
            Across country and city
            <br />
          </Text>
        </Quote>
      </div>
      <Text>
        First time I heard a song with Lars was 2006, I was 13 years old and I
        recognized myself in the same song as I do today and I think that is the
        vemod in his lyrics that makes other Swedes to recognize and see
        themself in the lyrics.
      </Text>
      <Divider />
      <Text>
        I have a lot of "vemod" inside of me, it is not that I am not happy or
        can't laugh but for most part I feel it and it makes me calm and these
        days careful with what I do with my time.
      </Text>
      <Text>
        Both of these have made some people from other countries see me as being
        shy. But I do not see myself as shy, it is "Jante" and "vemod". I don't
        like to be something special and the vemod have created a patience and
        acceptance that I do not need to say everything I think.
      </Text>
      <Text>
        These two I think is the thing that is unique things with Swedes, you
        might find it in people from other countries but I think these are very
        swedish.
      </Text>
      <Text>
        I think I am more global now then I was 8 years ago when I got my first
        none swedish friend, she is from USA. Americans and Swedes are so
        diffrent in so many things when it comes to a general view of them. I
        learned to be more vocal and to actually say what I think about things,
        even if I did this before I think I have learned that it is okay to be
        more vocal about it.
      </Text>
      <Text>
        I now have an opinion of that countries should cooperate more with each
        other because we face the same issues and we could learn more from each
        other than we do today. That is something I have realized working in a
        global company.
      </Text>
    </Header>
  );
};
