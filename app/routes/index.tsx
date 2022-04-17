import GitHubCalendar from 'react-github-calendar';
import { Container, Row, Col as Column } from 'react-grid-system';
import { Corner } from '../components/Corner';

const Index = () => (
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
            Today I am developing some private Remix apps with diffrent
            types of databases.
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
    <div className='icons'>
      <Container fluid>
        <Row>
          <Column lg={6}>
            <h4>Lang</h4>
            <p>
              <img
                src='/html5.svg'
                alt='HTML5'
              />
              <img
                src='/css3.svg'
                alt='CSS3'
              />
              <img
                src='/typescript.svg'
                alt='TypeScript'
              />
              <img
                src='/javascript.svg'
                alt='JavaScript'
              />
              <img
                src='php.svg'
                alt='PHP'
              />
              <img
                src='nodejs.svg'
                alt='NodeJS'
              />
            </p>
          </Column>
          <Column xs={6}>
            <h4>GraphQL</h4>
            <p>
              <img
                src='graphql.svg'
                alt='GraphQL'
              />
              <img
                src='apollographql.svg'
                alt='Apollo-GraphQL'
              />
            </p>
          </Column>
        </Row>
      </Container>
      <Container fluid>
        <Row>
          <Column lg={6}>
            <h4>Frameworks</h4>
            <p>
              <img
                src='/expressjs.svg'
                alt='Express.js'
              />
              <img
                src='bootstrap.svg'
                alt='Bootstrap'
              />
              <img
                src='laravel.svg'
                alt='Laravel'
              />
              <img
                src='react.svg'
                alt='React'
              />
              <img
                src='redux.svg'
                alt='Redux'
              />
              <img
                src='reactrouter.svg'
                alt='React Router'
              />
              <img
                src='materialui.svg'
                alt='Material UI'
              />
              <img
                src='nestjs.svg'
                alt='NestJS'
              />
              <img
                src='nextjs.svg'
                alt='Next JS'
              />
            </p>
          </Column>
          <Column xs={6}>
            <h4>Test frameworks</h4>
            <p>
              <img
                src='jasmine.svg'
                alt='Jasmine'
              />
              <img
                src='cypress.svg'
                alt='cypress'
              />
              <img
                src='jest.svg'
                alt='Jest'
              />
              <img
                src='testinglibary.svg'
                alt='Testing-Library'
              />
            </p>
          </Column>
        </Row>
      </Container>
      <Container fluid>
        <Row>
          <Column lg={6}>
            <h4>Databases</h4>
            <p>
              <img
                src='mongodb.svg'
                alt='MongoDB'
              />
              <img
                src='mysql.svg'
                alt='MySQL'
              />
              <img
                src='postgres.svg'
                alt='Postgres'
              />
              <img
                src='redis.svg'
                alt='Redis'
              />
            </p>
            <h4>Package managers</h4>
            <p>
              <img
                src='npm.svg'
                alt='NPM'
              />
              <img
                src='yarn.svg'
                alt='Yarn'
              />
            </p>
            <h4>Builders</h4>
            <p>
              <img
                src='webpack.svg'
                alt='Webpack'
              />
              <img
                src='eslint.svg'
                alt='ESLint'
              />
              <img
                src='babel.svg'
                alt='Babel'
              />
              <img
                src='githubactions.svg'
                alt='GitHub Actions'
              />
            </p>
          </Column>
          <Column xs={6}>
            <h4>Servers</h4>
            <p>
              <img
                src='nginx.svg'
                alt='Nginx'
              />
              <img
                src='apache.svg'
                alt='Apache'
              />
            </p>
            <h4>Hosts</h4>
            <p>
              <img
                src='netlify.svg'
                alt='Netlify'
              />
              <img
                src='scaleway.svg'
                alt='Scaleway'
              />
            </p>
            <h4>Tools</h4>
            <p>
              <img
                src='insomnia.svg'
                alt='Insomnia'
              />
              <img
                src='vscode.svg'
                alt='Visual Studio Code'
              />
              <img
                src='git.svg'
                alt='Git'
              />
              <img
                src='github.svg'
                alt='GitHub'
              />
              <img
                src='mac.svg'
                alt='Mac OS'
              />
              <img
                src='chrome.svg'
                alt='Google Chrome'
              />
              <img
                src='docker.svg'
                alt='Docker'
              />
              <img
                src='jira.svg'
                alt='Jira'
              />
              <img
                src='swagger.svg'
                alt='Swagger'
              />
            </p>
          </Column>
        </Row>
      </Container>
    </div>
  </>
);

export default Index;
