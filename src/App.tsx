import { Container, Row, Col as Column } from 'react-grid-system';
import { Header } from './components/Header';
import { Heading } from './components/Heading';
import { Text } from './components/Text';
import { Link } from './components/Link';
import { List } from './components/List';
import { Post } from './components/Post';
import { Image } from './components/Image';
import { GithubCalendar } from './components/GithubCalendar';
import { GithubStats } from './components/GithubStats';
import { GithubRepo } from './components/GithubRepo';
import { GithubTopLangs } from './components/GithubTopLangs';
import { css } from '../styled-system/css';
import { Card } from './components/Card';
import { hstack } from '../styled-system/patterns';

export const App = () => {
  return (
    <Header>
      <Container style={{ padding: 0 }} fluid>
        <Row>
          <Column lg={7}>
            <Heading>Hi nerds 👋</Heading>
            <Text>
              I am David, I am currently working as a Software Engineer with a
              Typescript stack at{' '}
              <Link
                target='_blank'
                rel='noreferrer'
                href='https://github.com/novuhq'
              >
                @novuhq
              </Link>
              .
            </Text>
            <Text>
              Today I am developing some private Remix apps with diffrent
              types of databases.
            </Text>
            <List>
              <li>⌨️ I’m currently working on a new Remix app.</li>
              <li>📘 I’m currently learning Panda CSS.</li>
              <li>❔ Ask me about Remix, React, Nest.js stuff.</li>
              <li>
                🍔 Fun fact: I started out to be a chef but switched to be a
                developer, so food is my thing anyway.
              </li>
            </List>
            <Post
              to='/which-day-is-your-favorite'
              title='Which day is your favorite?'
              excerpt='1 year and 4 months since last post :O'
              date='2024-07-05'
              selected={true}
            />
          </Column>
          <Column lg={5}>
            <Heading>👨‍💼 Jobs</Heading>
            <List>
              <li>Software Developer, Novu (2022-04-04)</li>
              <li>Product Owner, Fortnox (2020-07-01 - 2022-04-01)</li>
              <li>Scrum Master, Fortnox (2019-09-02 - 2020-06-30)</li>
              <li>Software Developer, Fortnox (2017-04-03 - 2020-06-30)</li>
              <li>Software Developer, Isotop (2017-08-24 - 2017-04-02 )</li>
            </List>
            <Image style={{ width: '100%' }} src={'me.jpeg'} />
          </Column>
        </Row>
      </Container>
      <Card
        style={{
          backgroundColor: 'transparent',
          paddingTop: 25,
          paddingBottom: 25,
          marginBottom: 200,
          marginTop: 200,
        }}
      >
        <GithubCalendar />
      </Card>
      <Container style={{ padding: 0 }} fluid>
        <Row nogutter>
          <Column xs={12} lg={7}>
            <GithubStats />
            <Row
              className={css({
                marginTop: 100,
              })}
            >
              <Column lg={12}>
                <GithubRepo
                  username='novuhq'
                  repo='novu'
                  alt='Novu by novuhq'
                />
              </Column>
            </Row>
          </Column>
          <Column xs={12} lg={1} />
          <Column xs={12} lg={4}>
            <div className={hstack({ justifyContent: 'flex-end' })}>
              <GithubTopLangs />
            </div>
          </Column>
        </Row>
      </Container>
    </Header>
  );
};
