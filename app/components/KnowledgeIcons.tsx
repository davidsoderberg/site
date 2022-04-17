import { Container, Row, Col as Column } from 'react-grid-system';

export const KnowledgeIcons = ({ show = true }) => {
  if (!show) {
    return null;
  }
  return (
    <div className='icons'>
      <Container fluid>
        <Row>
          <Column lg={6}>
            <h4>Lang</h4>
            <p>
              <img src='/html5.svg' alt='HTML5' />
              <img src='/css3.svg' alt='CSS3' />
              <img src='/typescript.svg' alt='TypeScript' />
              <img src='/javascript.svg' alt='JavaScript' />
              <img src='php.svg' alt='PHP' />
              <img src='nodejs.svg' alt='NodeJS' />
            </p>
          </Column>
          <Column xs={6}>
            <h4>GraphQL</h4>
            <p>
              <img src='graphql.svg' alt='GraphQL' />
              <img src='apollographql.svg' alt='Apollo-GraphQL' />
            </p>
          </Column>
        </Row>
      </Container>
      <Container fluid>
        <Row>
          <Column lg={6}>
            <h4>Frameworks</h4>
            <p>
              <img src='/expressjs.svg' alt='Express.js' />
              <img src='bootstrap.svg' alt='Bootstrap' />
              <img src='laravel.svg' alt='Laravel' />
              <img src='react.svg' alt='React' />
              <img src='redux.svg' alt='Redux' />
              <img src='reactrouter.svg' alt='React Router' />
              <img src='materialui.svg' alt='Material UI' />
              <img src='nestjs.svg' alt='NestJS' />
              <img src='nextjs.svg' alt='Next JS' />
              <img src='prisma.svg' alt='Prisma.io' />
            </p>
          </Column>
          <Column xs={6}>
            <h4>Test frameworks</h4>
            <p>
              <img src='jasmine.svg' alt='Jasmine' />
              <img src='cypress.svg' alt='cypress' />
              <img src='jest.svg' alt='Jest' />
              <img src='testinglibary.svg' alt='Testing-Library' />
            </p>
          </Column>
        </Row>
      </Container>
      <Container fluid>
        <Row>
          <Column lg={6}>
            <h4>Databases</h4>
            <p>
              <img src='mongodb.svg' alt='MongoDB' />
              <img src='mysql.svg' alt='MySQL' />
              <img src='postgres.svg' alt='Postgres' />
              <img src='redis.svg' alt='Redis' />
            </p>
            <h4>Package managers</h4>
            <p>
              <img src='npm.svg' alt='NPM' />
              <img src='yarn.svg' alt='Yarn' />
            </p>
            <h4>Builders</h4>
            <p>
              <img src='webpack.svg' alt='Webpack' />
              <img src='eslint.svg' alt='ESLint' />
              <img src='babel.svg' alt='Babel' />
              <img src='githubactions.svg' alt='GitHub Actions' />
            </p>
          </Column>
          <Column xs={6}>
            <h4>Servers</h4>
            <p>
              <img src='nginx.svg' alt='Nginx' />
              <img src='apache.svg' alt='Apache' />
            </p>
            <h4>Hosts</h4>
            <p>
              <img src='netlify.svg' alt='Netlify' />
              <img src='scaleway.svg' alt='Scaleway' />
              <img src='vercel.svg' alt='Vercel' />
            </p>
            <h4>Tools</h4>
            <p>
              <img src='insomnia.svg' alt='Insomnia' />
              <img src='vscode.svg' alt='Visual Studio Code' />
              <img src='git.svg' alt='Git' />
              <img src='github.svg' alt='GitHub' />
              <img src='mac.svg' alt='Mac OS' />
              <img src='chrome.svg' alt='Google Chrome' />
              <img src='docker.svg' alt='Docker' />
              <img src='jira.svg' alt='Jira' />
              <img src='swagger.svg' alt='Swagger' />
            </p>
          </Column>
        </Row>
      </Container>
    </div>
  );
};
