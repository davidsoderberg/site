import { Link } from '@remix-run/react';
import { Container, Row, Col as Column } from 'react-grid-system';

export const Menu = () => {
  return (
    <Container
      fluid
      style={{
        padding: '15px',
        borderRadius: '4px',
        border: '1px solid #fff',
        textAlign: 'center',
        marginBottom: '15px',
        fontWeight: 'bolder',
      }}
    >
      <Row>
        <Column xs={12} lg={1}>
          <Link
            style={{
              textDecoration: 'none',
              padding: '15px',
              paddingBottom: '15px',
            }}
            to='/'
          >
            Home
          </Link>
        </Column>
        <Column xs={12} lg={1}>
          <Link
            style={{ textDecoration: 'none' }}
            to='/posts'
            prefetch='intent'
          >
            Posts
          </Link>
        </Column>
        <Column xs={12} lg={1}>
          <Link
            style={{ textDecoration: 'none' }}
            to='/bookmarks'
            prefetch='intent'
          >
            Bookmarks
          </Link>
        </Column>
        <Column xs={12} lg={4} />
        <Column xs={12} lg={1}>
          <a
            style={{ textDecoration: 'none' }}
            href='https://www.novu.co/'
            target='_blank'
            rel='noreferrer'
          >
            Novu
          </a>
        </Column>
        <Column xs={12} lg={2}>
          <a
            style={{ textDecoration: 'none' }}
            href='https://www.wod-portal.com/'
            target='_blank'
            rel='noreferrer'
          >
            Wod Portal
          </a>
        </Column>
        <Column xs={12} lg={1}>
          <a
            style={{ textDecoration: 'none' }}
            href='https://github.com/davidsoderberg'
            target='_blank'
            rel='noreferrer'
          >
            Github
          </a>
        </Column>
        <Column xs={12} lg={1}>
          <a
            style={{ textDecoration: 'none' }}
            href='https://twitter.com/dsouthmountain'
            target='_blank'
            rel='noreferrer'
          >
            Twitter
          </a>
        </Column>
      </Row>
    </Container>
  );
};
