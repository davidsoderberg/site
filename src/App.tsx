import { Header } from './components/Header';
import { PageHeader } from './components/PageHeader';
import { Text } from './components/Text';
import { Link } from './components/Link';
import { List } from './components/List';
import { Image } from './components/Image';
import { GithubCalendar } from './components/GithubCalendar';
import { GithubStats } from './components/GithubStats';
import { GithubRepo } from './components/GithubRepo';
import { GithubTopLangs } from './components/GithubTopLangs';
import { css } from '../styled-system/css';
import { Card } from './components/Card';
import { LatestPost } from './components/LatestPost';
import { SectionHeader } from './components/SectionHeader';
import { Row } from './components/Row';
import { GridContainer, GridColumn } from './components/Grid';

export const App = () => {
  return (
    <Header>
      <GridContainer>
        <GridColumn colSpan={7}>
          <PageHeader>Hi nerds 👋</PageHeader>
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
            Today I am developing some private Remix apps with diffrent types of
            databases.
          </Text>
          <List>
            <li>⌨️ I’m currently working on a Remix app.</li>
            <li>📘 I’m currently learning Panda CSS.</li>
            <li>❔ Ask me about Remix, React, Nest.js stuff.</li>
            <li>
              🍔 Fun fact: I started out to be a chef but switched to be a
              developer, so food is my thing anyway.
            </li>
          </List>
          <LatestPost />
        </GridColumn>
        <GridColumn colSpan={5}>
          <SectionHeader>👨‍💼 Jobs</SectionHeader>
          <List>
            <li>Software Developer, Novu (2022-04-04)</li>
            <li>Product Owner, Fortnox (2020-07-01 - 2022-04-01)</li>
            <li>Scrum Master, Fortnox (2019-09-02 - 2020-06-30)</li>
            <li>Software Developer, Fortnox (2017-04-03 - 2020-06-30)</li>
            <li>Software Developer, Isotop (2017-08-24 - 2017-04-02 )</li>
          </List>
          <Image className={css({ width: '100%' })} src={'me.jpeg'} />
        </GridColumn>
      </GridContainer>
      <Card
        className={css({
          paddingTop: 0,
          paddingBottom: 0,
          marginBottom: 200,
          marginTop: 200,
          boxShadow: 'default',
          borderRadius: 'default',
        })}
        variant='transparent'
      >
        <GithubCalendar />
      </Card>
      <GridContainer>
        <GridColumn colSpan={7}>
          <GithubStats />
          <GridContainer
            className={css({
              marginTop: 200,
              marginBottom: 200,
              alignItems: 'center',
            })}
          >
            <GridColumn colSpan={6}>
              <GithubRepo username='novuhq' repo='novu' alt='Novu by novuhq' />
            </GridColumn>
            <GridColumn
              colSpan={6}
              className={css({
                smDown: {
                  marginTop: 200,
                },
              })}
            >
              <GithubRepo
                username='davidsoderberg'
                repo='site'
                alt='This website'
              />
            </GridColumn>
          </GridContainer>
        </GridColumn>
        <GridColumn colSpan={5}>
          <Row
            className={css({
              justifyContent: 'flex-end',
              smDown: {
                justifyContent: 'center',
              },
            })}
          >
            <GithubTopLangs />
          </Row>
        </GridColumn>
      </GridContainer>
    </Header>
  );
};
