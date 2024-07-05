import { Header } from '../components/Header';
import { Date } from '../components/Date';
import { Heading } from '../components/Heading';
import { List } from '../components/List';
import { Text } from '../components/Text';
import { Meta } from '../components/Meta';

export const FirstTwoMonths = () => {
  return (
    <Header>
      <Meta
        title='The first two months at Novu'
        description='About my two first month at Novu.'
      />
      <Heading>The first two months at Novu</Heading>
      <Date>2022-06-01</Date>
      <Text>
        So when this week ends I have done two months at Novu and it feels like
        yesterday I had calls with both Tomer and Dima about starting at Novu.
        These two months have been the best two months in my career as
        developer/enginner maybe life even, now you may think thats how everyone
        feels at a new company...
      </Text>
      <Text>
        Well I know everyone is excited about starting at a new company and
        feels happy to do something new and of course I was/am the same. But it
        is diffrent with Novu here is what the diffrence was/is to me:
      </Text>
      <List>
        <li>
          Everyone and I mean everyone inside of Novu is such amazing people
          (usually there is someone that you do not get along with)
        </li>
        <li>
          Being honest about your opinion is appreciated and not taking it as
          having a bad attitude or being negative
        </li>
        <li>
          Transparency is a big thing inside of Novu everything from economy to
          hiring to text in documentation
        </li>
        <li>
          Review of code does not feel like someone is looking for your
          misstake, more like a conversation about the code you created and
          suggestion on how the code <em>maybe</em> could be better
        </li>
        <li>
          You are allowed to have bad days and no one tells you to shape up
        </li>
      </List>
      <Text>
        At the time I am writing this I have just woke up from the first night
        at home after a trip to Stockholm (capital of Sweden). In Stockholm I
        meet two of my collegues that travled from Israel just to meet me for a
        couple of days, one of them are sleeping at my couch stil. We will work
        together today and tomorrow she will get back to Israel.
      </Text>
      <Text>
        This trip to Stockholm and meet my collegues is one of the best
        experiance I have had in my life. Like it did not go according to the
        plans, but the adventures we had is/was amazing and I am sure it made us
        come closer to each other.
      </Text>
      <Text>
        Novu is a fully remote company and geeting the oppertunity to meet some
        of my collegues is truly a honor and a pleasure, so thanks Novu giving
        it to me. I also hope I get the chance to meet the rest of my amazing
        collegues at Novu soon because I bet and know they are equal as amazing
        as those I meet this time.
      </Text>
    </Header>
  );
};
