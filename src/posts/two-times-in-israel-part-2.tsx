import { Header } from '../components/Header';
import { Link } from '../components/Link';
import { Text } from '../components/Text';
import { Image } from '../components/Image';
import { css } from '../../styled-system/css';
import { Meta } from '../components/Meta';
import { PostHeader } from '../components/PostHeader';

export const TwoTimesInIsraelPart2 = () => {
  return (
    <Header>
      <Meta
        title='Two times in Israel (part 2)'
        description='Amazing week in Israel... Welcome to Israel. Your life will never be the same.'
        image='israel.png'
      />
      <PostHeader title={'Two times in Israel (part 2)'} date={'2023-02-05'} />
      <Text
        className={css({
          fontWeight: 'bolder',
        })}
      >
        If you have not read{' '}
        <Link href='/two-times-in-israel-part-1'>part one</Link> please do
        before reading this.
      </Text>
      <Text>
        Okay so now it is like beginning of January and Gali my collegue in
        Israel invites me to her wedding in Israel in beginning of February and
        I check flight tickets and so but at this point I really liked to go,
        but it feelt like to much. After like a week I changed my mind and
        talked to Dima another collegue and he invited me to stay at his place
        around the wedding. We decied to keep it secret to Gali and told her
        boyfriend, oh boy how hard this was for me to keep it secret to Gali for
        like two weeks.
      </Text>
      <Text>
        Time passed and the situation in Israel got worse then it was when I
        booked the tickets, but with the great support of my parents and some
        collegue I decied to go anyway (this post is a proff that I survived).
      </Text>
      <Text>
        So Saturday I traveled to Copenhagen to stay at the hotel to be on
        airport on time early Sunday to take a flight to Tel Aviv again. Dima
        meet me at the airport and we traveled to his and his very friendly
        wifes apartment, I made myself at home and in the evening we had kebab
        and visited a local rock concert with another collegue.
      </Text>
      <Text>
        Monday and the day of the sureprise for Gali, I was a bit nervous to be
        honest. We spent the day on an open space office where you can pay to
        work from for a day. After that we did go to this amazing bar (Bellboy)
        everyone arrvied before Gali and I had my eyes facing the entrance door
        so I could see Galis face when she did see me. And that face made the
        whole trip alone, every time I think of it, it makes smile. She was so
        happy and surprise to see me being in Israel. We had some great drinks
        at the bar and moved on for pizza and beer and that pizza was very very
        big and so good in the night.
      </Text>
      <Text>
        Tuesday was a calm working day from the apartment and we made Swedish
        meat balls in the evening.
      </Text>
      <Text>
        Next day we did go to the office again and some other collegues showed
        up as well, after the working day was over me, Dima and Tomer did go to
        a restaurant with amazing food and service. One of the best restuarant
        in israel I have heard 😛
      </Text>
      <Text>
        Thursday and the day of the wedding we worked from the apartment until
        time of the wedding. We got to a very nice venue and they served a lot
        of great small food snacks and we got some good wine. The cermony was in
        hebrew so you guessed it I did understand every word... not 😛 But it
        was very touching and very beautifull.
      </Text>
      <Text>
        Friday and we visited the food market in Tel Aviv and had a lot of good
        food and some wine with Tomer and his wife. After it we did go home and
        I did not do much until I fell a sleep.
      </Text>
      <Text>
        It is already Saturday and we did go north to visit a collegue of us and
        his amazing wife. It was a very great day with walks, cookies, board
        games and sushi.
      </Text>
      <Text>
        It is now today and the day started with a coffe with Dima and Tomer,
        then I headed of to the airport again.
      </Text>
      <Text>
        Thanks to everyone and special thanks to Gali for the kind invitation to
        her wedding (Wish you all the best in your marriage) and Dima that
        hosted me this time and gave me a lot of great food.
      </Text>
      <Text>
        To me Novu is my second family, sometimes you are tired of them and most
        times you wish you could be with them all the time. That is the thing
        that makes Novu special, an collegue and friend of mine said it great
        about Gali, "Gali is ... Gali (as an adjective)". And I think that is
        true about every one of the people working in Novu we are very unique
        and to describe any of us our name is the best way I think.
      </Text>
      <Text>
        Everytime I have switched job I have stayed 3 times longer in the next
        one, that would mean I will stay 15 years in Novu and I hope that will
        be the case. Yes we have stuff to improve and stuff to figure out but
        looking back at my other to places it is the feeling of being part of
        something much bigger and I do in Novu. All issues and problems we can
        solve togther and the feeling of us being family (at least for me) is a
        great start to be able to solve any of those heading our way.
      </Text>
      <Text>Go Novu!</Text>
      <Image
        src='/israel.png'
        alt='Welcome to Israel. Your life will never be the same.'
      />
    </Header>
  );
};
