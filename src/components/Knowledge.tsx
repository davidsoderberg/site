import { Image } from './Image';
import { css } from '../../styled-system/css';
import { Link } from './Link';
import { useState } from 'react';
import { When } from './When';
import { SectionHeader } from './SectionHeader';
import { Row } from './Row';
import { Column } from './Column';
import { GridContainer, GridColumn } from './Grid';

const columnClass = css({
  alignItems: 'flex-start',
  gap: 100,
  smDown: {
    flexDirection: 'row',
    marginBottom: 200,
    flexWrap: 'wrap',
    borderBottom: 'default',
    paddingBottom: 150,
  },
});

export const Knowledge = () => {
  const [show, setShow] = useState(true);

  return (
    <>
      <Row
        className={css({
          marginTop: 200,
        })}
      >
        <SectionHeader>
          <Link
            href='#'
            onClick={(e) => {
              e.preventDefault();
              setShow((old) => !old);
            }}
          >
            My knowledge
          </Link>
        </SectionHeader>
      </Row>
      <When truthy={show}>
        <GridContainer className={css({ marginBottom: 100, columnGap: 0 })}>
          <GridColumn colSpan={4}>
            <Column className={columnClass}>
              <SectionHeader style={{ marginBottom: 0 }}>Lang</SectionHeader>
              <Image src='/icons/html5.svg' alt='HTML5' />
              <Image src='/icons/css3.svg' alt='CSS3' />
              <Image src='/icons/typescript.svg' alt='TypeScript' />
              <Image src='/icons/javascript.svg' alt='JavaScript' />
              <Image src='/icons/php.svg' alt='PHP' />
              <Image src='/icons/nodejs.svg' alt='NodeJS' />
            </Column>
          </GridColumn>
          <GridColumn colSpan={4}>
            <Column className={columnClass}>
              <SectionHeader style={{ marginBottom: 0 }}>GraphQL</SectionHeader>
              <Image src='/icons/graphql.svg' alt='GraphQL' />
              <Image src='/icons/apollographql.svg' alt='Apollo-GraphQL' />
            </Column>
            <Column className={columnClass}>
              <SectionHeader style={{ marginBottom: 0 }}>
                Test frameworks
              </SectionHeader>
              <Image src='/icons/jasmine.svg' alt='Jasmine' />
              <Image src='/icons/cypress.svg' alt='cypress' />
              <Image src='/icons/jest.svg' alt='Jest' />
              <Image src='/icons/testinglibary.svg' alt='Testing-Library' />
            </Column>
          </GridColumn>
          <GridColumn colSpan={4}>
            <Column className={columnClass}>
              <SectionHeader style={{ marginBottom: 0 }}>
                Frameworks
              </SectionHeader>
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
            </Column>
          </GridColumn>
        </GridContainer>
        <GridContainer className={css({ marginBottom: 100, columnGap: 0 })}>
          <GridColumn colSpan={4}>
            <Column className={columnClass}>
              <SectionHeader style={{ marginBottom: 0 }}>
                Databases
              </SectionHeader>
              <Image src='/icons/mongodb.svg' alt='MongoDB' />
              <Image src='/icons/mysql.svg' alt='MySQL' />
              <Image src='/icons/postgres.svg' alt='Postgres' />
              <Image src='/icons/redis.svg' alt='Redis' />
            </Column>
            <Column className={columnClass}>
              <SectionHeader style={{ marginBottom: 0 }}>
                Builders
              </SectionHeader>
              <Image src='/icons/webpack.svg' alt='Webpack' />
              <Image src='/icons/eslint.svg' alt='ESLint' />
              <Image src='/icons/babel.svg' alt='Babel' />
              <Image src='/icons/githubactions.svg' alt='GitHub Actions' />
            </Column>
          </GridColumn>
          <GridColumn colSpan={4}>
            <Column className={columnClass}>
              <SectionHeader style={{ marginBottom: 0 }}>Tools</SectionHeader>
              <Image src='/icons/insomnia.svg' alt='Insomnia' />
              <Image src='/icons/vscode.svg' alt='Visual Studio Code' />
              <Image src='/icons/git.svg' alt='Git' />
              <Image src='/icons/github.svg' alt='GitHub' />
              <Image src='/icons/mac.svg' alt='Mac OS' />
              <Image src='/icons/chrome.svg' alt='Google Chrome' />
              <Image src='/icons/docker.svg' alt='Docker' />
              <Image src='/icons/jira.svg' alt='Jira' />
              <Image src='/icons/swagger.svg' alt='Swagger' />
            </Column>
          </GridColumn>
          <GridColumn colSpan={4}>
            <Column className={columnClass}>
              <SectionHeader style={{ marginBottom: 0 }}>
                Package managers
              </SectionHeader>
              <Image src='/icons/npm.svg' alt='NPM' />
              <Image src='/icons/yarn.svg' alt='Yarn' />
            </Column>
            <Column className={columnClass}>
              <SectionHeader style={{ marginBottom: 0 }}>Servers</SectionHeader>
              <Image src='/icons/nginx.svg' alt='Nginx' />
              <Image src='/icons/apache.svg' alt='Apache' />
            </Column>
            <Column className={columnClass}>
              <SectionHeader style={{ marginBottom: 0 }}>Hosts</SectionHeader>
              <Image src='/icons/netlify.svg' alt='Netlify' />
              <Image src='/icons/scaleway.svg' alt='Scaleway' />
              <Image src='/icons/vercel.svg' alt='Vercel' />
            </Column>
          </GridColumn>
        </GridContainer>
      </When>
    </>
  );
};
