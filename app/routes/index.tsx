import { useState } from 'react';
import { Container, Row, Col as Column } from 'react-grid-system';
import { Corner } from '../components/Corner';
import { GithubCalendar } from '../components/GithubCalendar';
import { GithubRepo } from '../components/GithubRepo';
import { GithubStats } from '../components/GithubStats';
import { GithubTopLangs } from '../components/GithubTopLangs';
import { KnowledgeIcons } from '../components/KnowledgeIcons';
import { When } from '../components/When';

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
              Today I am developing some private Remix apps with diffrent
              typesof databases.
            </p>
            <ul>
              <li>⌨️ I’m currently working on a new Remix app.</li>
              <li>📘 I’m currently learning Remix.</li>
              <li>❔ Ask me about Remix, React, Nest.js stuff.</li>
              <li>
                🍔 Fun fact: I started out to be a chef but switched to be a
                developer, so food is my thing anyway.
              </li>
            </ul>
            <When truthy={false}>
              <div className='divider'></div>
              <div className='form-control w-full'>
                <h4
                  style={{
                    marginTop: '0px',
                    marginBottom: '5px',
                  }}
                >
                  Newsletter
                </h4>
                <div className='input-group'>
                  <input
                    type='email'
                    placeholder='Email'
                    className='input input-bordered w-full'
                  />
                  <button className='btn'>Subscribe</button>
                </div>
              </div>
            </When>
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
                src='me.jpeg'
                alt='David Söderberg'
                width='50%'
                height='auto'
                style={{
                  border: '1px solid #fff',
                  borderRadius: '4px',
                  display: 'inline',
                }}
              />
            </div>
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
