import { useState } from 'react';
import GitHubCalendar from 'react-github-calendar';
import { Container, Row, Col as Column } from 'react-grid-system';
import { Corner } from '../components/Corner';
import { KnowledgeIcons } from '../components/KnowledgeIcons';

const Index = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <Corner />
      <Container fluid style={{ paddingBottom: '15px' }}>
        <Row>
          <Column lg={7}>
            <h2>Hi nerds 👋</h2>
            <p>
              I am David, I am currently working as a Software Engineer with a
              Typescript stack at{' '}
              <a
                href='https://github.com/novuhq'
                target='_blank'
                rel='noreferrer'
              >
                @novuhq
              </a>
              .
            </p>
            <p>
              Today I am developing some private Remix apps with diffrent types
              of databases.
            </p>
            <ul>
              <li>⌨️ I’m currently working on a new Remix app.</li>
              <li>📘 I’m currently learning Graphql and Remix.</li>
              <li>❔ Ask me about Remix, React, Nest.js stuff.</li>
              <li>
                🍔 Fun fact: I started out to be a chef but switched to be a
                developer, so food is my thing anyway.
              </li>
            </ul>
          </Column>
          <Column lg={5}>
            <h2>👨‍💼 Jobs</h2>
            <ul>
              <li>Software Developer, Novu (2022-04-04)</li>
              <li>Product Owner, Fortnox (2020-07-01 - 2022-04-01)</li>
              <li>Scrum Master, Fortnox (2019-09-02 - 2020-06-30)</li>
              <li>Software Developer, Fortnox (2017-04-03 - 2020-06-30)</li>
              <li>Software Developer, Isotop (2017-08-24 - 2017-04-02 )</li>
            </ul>
            <div style={{ textAlign: 'center' }}>
              <img
                src='https://avatars.githubusercontent.com/u/2233092?v=4'
                alt='David Söderberg'
                style={{
                  width: '50%',
                  border: '1px solid #fff',
                  borderRadius: '4px',
                }}
              />
            </div>
          </Column>
        </Row>
      </Container>
      <GitHubCalendar
        style={{
          marginTop: '30px',
          marginBottom: '30px',
        }}
        weekStart={1}
        theme={{
          level4: '#39d353',
          level3: '#26a641',
          level2: '#006d32',
          level1: '#0e4429',
          level0: '#2d333b',
        }}
        blockSize={16}
        showWeekdayLabels={true}
        username='davidsoderberg'
      />
      <Container fluid>
        <Row>
          <Column xs={12} lg={7}>
            <a
              href='https://github.com/davidsoderberg'
              target='_blank'
              rel='noreferrer'
            >
              <img
                src='https://github-readme-stats-delta-ebon-21.vercel.app/api?username=davidsoderberg&count_private=true&theme=dark&show_icons=true'
                alt="David's GitHub stats"
                style={{ paddingBottom: '15px' }}
              />
            </a>
            <Row>
              <Column xs={12} lg={6}>
                <a
                  href='https://github.com/novuhq/novu'
                  target='_blank'
                  rel='noreferrer'
                >
                  <img
                    src='https://github-readme-stats-delta-ebon-21.vercel.app/api/pin/?username=novuhq&repo=novu&theme=dark'
                    alt='Novu by novuhq'
                  />
                </a>
              </Column>
              <Column xs={12} lg={6}>
                <a
                  href='https://github.com/davidsoderberg/site'
                  target='_blank'
                  rel='noreferrer'
                >
                  <img
                    src='https://github-readme-stats-delta-ebon-21.vercel.app/api/pin/?username=davidsoderberg&repo=site&theme=dark'
                    alt='Site'
                  />
                </a>
              </Column>
            </Row>
          </Column>
          <Column xs={12} lg={1} />
          <Column xs={12} lg={4} style={{ padding: '0px' }}>
            <a
              href='https://github.com/davidsoderberg?tab=repositories'
              target='_blank'
              rel='noreferrer'
            >
              <img
                src='https://github-readme-stats-delta-ebon-21.vercel.app/api/top-langs/?username=davidsoderberg&langs_count=10&theme=dark&hide=PHP'
                alt='Top Langs'
              />
            </a>
          </Column>
        </Row>
      </Container>
      <h3>
        <a
          href='/'
          onClick={(e) => {
            e.preventDefault();
            setShow(!show);
          }}
          style={{
            textDecoration: 'none'
          }}
        >
          What do I know?
        </a>
      </h3>
      <KnowledgeIcons show={show} />
    </>
  );
};

export default Index;
