import { Container, Row, Col as Column } from 'react-grid-system';
import { Heading } from './Heading';
import { Image } from './Image';
import { hstack, vstack } from '../../styled-system/patterns';
import { css } from '../../styled-system/css';
import { Link } from './Link';
import { useState } from 'react';
import { When } from './When';

const columnClass = vstack({ alignItems: 'flex-start', gap: 100 });

export const Knowledge = () => {
  const [show, setShow] = useState(true);

  return (
    <div
      className={css({
        marginTop: 200,
        smDown: {
          display: 'none',
        },
      })}
    >
      <div className={hstack()}>
        <Heading variant='h2'>
          <Link
            href='#'
            onClick={(e) => {
              e.preventDefault();
              setShow((old) => !old);
            }}
          >
            My knowledge
          </Link>
        </Heading>
      </div>
      <When truthy={show}>
        <Container style={{ padding: 0 }} fluid>
          <Row nogutter className={css({ marginBottom: 100 })}>
            <Column lg={4}>
              <div className={columnClass}>
                <Heading style={{ marginBottom: 0 }} variant='h3'>
                  Lang
                </Heading>
                <Image src='/icons/html5.svg' alt='HTML5' />
                <Image src='/icons/css3.svg' alt='CSS3' />
                <Image src='/icons/typescript.svg' alt='TypeScript' />
                <Image src='/icons/javascript.svg' alt='JavaScript' />
                <Image src='/icons/php.svg' alt='PHP' />
                <Image src='/icons/nodejs.svg' alt='NodeJS' />
              </div>
            </Column>
            <Column lg={4}>
              <div className={vstack({ gap: 100 })}>
                <Heading style={{ marginBottom: 0 }} variant='h3'>
                  GraphQL
                </Heading>
                <Image src='/icons/graphql.svg' alt='GraphQL' />
                <Image src='/icons/apollographql.svg' alt='Apollo-GraphQL' />
              </div>
              <div className={vstack({ gap: 100 })}>
                <Heading style={{ marginBottom: 0 }} variant='h3'>
                  Test frameworks
                </Heading>
                <Image src='/icons/jasmine.svg' alt='Jasmine' />
                <Image src='/icons/cypress.svg' alt='cypress' />
                <Image src='/icons/jest.svg' alt='Jest' />
                <Image src='/icons/testinglibary.svg' alt='Testing-Library' />
              </div>
            </Column>
            <Column lg={4}>
              <div className={vstack({ alignItems: 'flex-end', gap: 100 })}>
                <Heading style={{ marginBottom: 0 }} variant='h3'>
                  Frameworks
                </Heading>
                <Image src='/icons/expressjs.svg' alt='Express.js' />
                <Image src='/icons/bootstrap.svg' alt='Bootstrap' />
                <Image src='/icons/laravel.svg' alt='Laravel' />
                <Image src='/icons/react.svg' alt='React' />
                <Image src='/icons/redux.svg' alt='Redux' />
                <Image src='/icons/reactrouter.svg' alt='React Router' />
                <Image src='/icons/materialui.svg' alt='Material UI' />
                <Image src='/icons/nestjs.svg' alt='NestJS' />
                <Image src='/icons/nextjs.svg' alt='Next JS' />
                <Image src='/icons/prisma.svg' alt='Prisma.io' />
              </div>
            </Column>
          </Row>
          <Row nogutter className={css({ marginBottom: 100 })}>
            <Column lg={4}>
              <div className={columnClass}>
                <Heading style={{ marginBottom: 0 }} variant='h3'>
                  Databases
                </Heading>
                <Image src='/icons/mongodb.svg' alt='MongoDB' />
                <Image src='/icons/mysql.svg' alt='MySQL' />
                <Image src='/icons/postgres.svg' alt='Postgres' />
                <Image src='/icons/redis.svg' alt='Redis' />
              </div>
              <div className={columnClass}>
                <Heading style={{ marginBottom: 0 }} variant='h3'>
                  Builders
                </Heading>
                <Image src='/icons/webpack.svg' alt='Webpack' />
                <Image src='/icons/eslint.svg' alt='ESLint' />
                <Image src='/icons/babel.svg' alt='Babel' />
                <Image src='/icons/githubactions.svg' alt='GitHub Actions' />
              </div>
            </Column>
            <Column lg={4}>
              <div className={vstack({ gap: 100 })}>
                <Heading style={{ marginBottom: 0 }} variant='h3'>
                  Tools
                </Heading>
                <Image src='/icons/insomnia.svg' alt='Insomnia' />
                <Image src='/icons/vscode.svg' alt='Visual Studio Code' />
                <Image src='/icons/git.svg' alt='Git' />
                <Image src='/icons/github.svg' alt='GitHub' />
                <Image src='/icons/mac.svg' alt='Mac OS' />
                <Image src='/icons/chrome.svg' alt='Google Chrome' />
                <Image src='/icons/docker.svg' alt='Docker' />
                <Image src='/icons/jira.svg' alt='Jira' />
                <Image src='/icons/swagger.svg' alt='Swagger' />
              </div>
            </Column>
            <Column lg={4}>
              <div className={vstack({ alignItems: 'flex-end', gap: 100 })}>
                <Heading style={{ marginBottom: 0 }} variant='h3'>
                  Package managers
                </Heading>
                <Image src='/icons/npm.svg' alt='NPM' />
                <Image src='/icons/yarn.svg' alt='Yarn' />
              </div>
              <div className={vstack({ alignItems: 'flex-end', gap: 100 })}>
                <Heading style={{ marginBottom: 0 }} variant='h3'>
                  Servers
                </Heading>
                <Image src='/icons/nginx.svg' alt='Nginx' />
                <Image src='/icons/apache.svg' alt='Apache' />
              </div>
              <div className={vstack({ alignItems: 'flex-end', gap: 100 })}>
                <Heading style={{ marginBottom: 0 }} variant='h3'>
                  Hosts
                </Heading>
                <Image src='/icons/netlify.svg' alt='Netlify' />
                <Image src='/icons/scaleway.svg' alt='Scaleway' />
                <Image src='/icons/vercel.svg' alt='Vercel' />
              </div>
            </Column>
          </Row>
        </Container>
      </When>
    </div>
  );
};
