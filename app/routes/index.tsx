import { useLoaderData } from '@remix-run/react';
import { useState } from 'react';
import { Container, Row, Col as Column } from 'react-grid-system';
import { Corner } from '../components/Corner';
import { GithubCalendar } from '../components/GithubCalendar';
import { GithubRepo } from '../components/GithubRepo';
import { GithubStats } from '../components/GithubStats';
import { GithubTopLangs } from '../components/GithubTopLangs';
import { KnowledgeIcons } from '../components/KnowledgeIcons';
import { MDX } from '../components/Mdx';
import { compileMdx } from '../utils/mdx.server';

export const loader = async () => {
  const path = __dirname + '/../content';
  const { code: about } = await compileMdx('about.mdx', path);
  const { code: sidebar } = await compileMdx('sidebar.mdx', path);

  return {
    about,
    sidebar,
  };
};

const Index = () => {
  const [show, setShow] = useState(false);
  const { about, sidebar } = useLoaderData();

  return (
    <>
      <Corner />
      <Container fluid style={{ paddingBottom: '15px' }}>
        <Row>
          <Column lg={7}>
            <MDX code={about} />
          </Column>
          <Column lg={5}>
            <MDX code={sidebar} />
          </Column>
        </Row>
      </Container>
      <GithubCalendar />
      <Container fluid>
        <Row>
          <Column xs={12} lg={7}>
            <GithubStats />
            <Row>
              <Column xs={12} lg={6}>
                <GithubRepo
                  username='novuhq'
                  repo='novu'
                  alt='Novu by novuhq'
                />
              </Column>
              <Column xs={12} lg={6}>
                <GithubRepo username='davidsoderberg' repo='site' alt='Site' />
              </Column>
            </Row>
          </Column>
          <Column xs={12} lg={1} />
          <Column xs={12} lg={4} style={{ padding: '0px' }}>
            <GithubTopLangs />
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
            textDecoration: 'none',
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
