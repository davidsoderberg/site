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
            Today I am developing some private Node.js/React apps with diffrent
            types of databases.
          </p>
          <ul>
            <li>⌨️ I’m currently working on a new Remix app.</li>
            <li>📘 I’m currently learning Graphql and Remix.</li>
            <li>❔ Ask me about React, Redux, Nest.js stuff.</li>
            <li>
              🍔 Fun fact: I started out to be a chef but switched to be a
              developer, so food is my thing anyway.
            </li>
            <li>
              I store my code on Github:{' '}
              <a
                href='https://github.com/davidsoderberg'
                target='_blank'
                rel='noreferrer'
              >
                @davidsoderberg
              </a>
            </li>
            <li>
              📫 How to reach me:{' '}
              <a
                href='https://twitter.com/dsouthmountain'
                target='_blank'
                rel='noreferrer'
              >
                @dsouthmountain
              </a>{' '}
              (Twitter)
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
                src='https://camo.githubusercontent.com/49fbb99f92674cc6825349b154b65aaf4064aec465d61e8e1f9fb99da3d922a1/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f68746d6c352d2532334533344632362e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d68746d6c35266c6f676f436f6c6f723d7768697465'
                alt='HTML5'
              />
              <img
                src='https://camo.githubusercontent.com/e6b67b27998fca3bccf4c0ee479fc8f9de09d91f389cccfbe6cb1e29c10cfbd7/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f637373332d2532333135373242362e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d63737333266c6f676f436f6c6f723d7768697465'
                alt='CSS3'
              />
              <img
                src='https://camo.githubusercontent.com/ee71fcc1aa3d059265517741dffc4161922fd744377e7a5f07c43381d0aa9aac/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f747970657363726970742d2532333030374143432e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d74797065736372697074266c6f676f436f6c6f723d7768697465'
                alt='TypeScript'
              />
              <img
                src='https://camo.githubusercontent.com/aeddc848275a1ffce386dc81c04541654ca07b2c43bbb8ad251085c962672aea/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6a6176617363726970742d2532333332333333302e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d6a617661736372697074266c6f676f436f6c6f723d253233463744463145'
                alt='JavaScript'
              />
              <img
                src='https://camo.githubusercontent.com/b7e290d2aeff9829bba45e897265ceebd34b25f6f7efba4b08e1b23cfe0815e7/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f7068702d2532333737374242342e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d706870266c6f676f436f6c6f723d7768697465'
                alt='PHP'
              />
              <img
                src='https://camo.githubusercontent.com/7d7b100e379663ee40a20989e6c61737e6396c1dafc3a7c6d2ada8d4447eb0e4/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6e6f64652e6a732d3644413535463f7374796c653d666f722d7468652d6261646765266c6f676f3d6e6f64652e6a73266c6f676f436f6c6f723d7768697465'
                alt='NodeJS'
              />
            </p>
          </Column>
          <Column xs={6}>
            <h4>GraphQL</h4>
            <p>
              <img
                src='https://camo.githubusercontent.com/9ad071f3788625b60549260fb99aeb8516ce3ae6ed2506e88663a2b6375c7d34/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d4772617068514c2d4531303039383f7374796c653d666f722d7468652d6261646765266c6f676f3d6772617068716c266c6f676f436f6c6f723d7768697465'
                alt='GraphQL'
              />
              <img
                src='https://camo.githubusercontent.com/d9952651b677177c9ec05802b314d09d9f34364fcdad7b939c2c999c745d31dc/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d41706f6c6c6f4772617068514c2d3331314338373f7374796c653d666f722d7468652d6261646765266c6f676f3d61706f6c6c6f2d6772617068716c'
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
                src='https://camo.githubusercontent.com/8286a45a106e1a3c07489f83a38159981d888518a740b59c807ffc1b7b1e2f7b/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f657870726573732e6a732d2532333430346435392e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d65787072657373266c6f676f436f6c6f723d253233363144414642'
                alt='Express.js'
              />
              <img
                src='https://camo.githubusercontent.com/b768ae6e4f89b74512e6de02a8367fd71465bc3d88ef1cf2f1622e2017c32bea/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f626f6f7473747261702d2532333536334437432e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d626f6f747374726170266c6f676f436f6c6f723d7768697465'
                alt='Bootstrap'
              />
              <img
                src='https://camo.githubusercontent.com/85b8858163097e34c31ef8eeda533e1fa18be0ec8ce58f494b6b5cedc2f27196/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6c61726176656c2d2532334646324432302e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d6c61726176656c266c6f676f436f6c6f723d7768697465'
                alt='Laravel'
              />
              <img
                src='https://camo.githubusercontent.com/ab4c3c731a174a63df861f7b118d6c8a6c52040a021a552628db877bd518fe84/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f72656163742d2532333230323332612e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d7265616374266c6f676f436f6c6f723d253233363144414642'
                alt='React'
              />
              <img
                src='https://camo.githubusercontent.com/9a7c7ebbabb2096c0ad0cac6f64bc9fe93f4954a3ae3f51d6f3e076ba462aab1/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f72656475782d2532333539336438382e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d7265647578266c6f676f436f6c6f723d7768697465'
                alt='Redux'
              />
              <img
                src='https://camo.githubusercontent.com/4f9d20f3a284d2f6634282f61f82a62e99ee9906537dc9859decfdc9efbb51ec/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f52656163745f526f757465722d4341343234353f7374796c653d666f722d7468652d6261646765266c6f676f3d72656163742d726f75746572266c6f676f436f6c6f723d7768697465'
                alt='React Router'
              />
              <img
                src='https://camo.githubusercontent.com/d951e189221e39e49428a00be5c673b3e0e59ce0c6c6293bdedd424f593b5e63/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6d6174657269616c75692d2532333030383143422e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d6d6174657269616c2d7569266c6f676f436f6c6f723d7768697465'
                alt='Material UI'
              />
              <img
                src='https://camo.githubusercontent.com/8855980a487f9e31426fbfc2cbbfdda5aa3b7f1d390e262e652e639e911b3d87/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6e6573746a732d2532334530323334452e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d6e6573746a73266c6f676f436f6c6f723d7768697465'
                alt='NestJS'
              />
              <img
                src='https://camo.githubusercontent.com/b7395b00d152dc8f19cec61f582369bd580e31b8ed93d34646ec43aa675baa7c/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4e6578742d626c61636b3f7374796c653d666f722d7468652d6261646765266c6f676f3d6e6578742e6a73266c6f676f436f6c6f723d7768697465'
                alt='Next JS'
              />
            </p>
          </Column>
          <Column xs={6}>
            <h4>Test frameworks</h4>
            <p>
              <img
                src='https://camo.githubusercontent.com/9981d1e5e4e05ee1389b50e95a5123b77691fbb3744e7fb9957ce43481232bc6/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6a61736d696e652d2532333841343138322e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d6a61736d696e65266c6f676f436f6c6f723d7768697465'
                alt='Jasmine'
              />
              <img
                src='https://camo.githubusercontent.com/a2cc7362377d69d8ad5147e49f7b269cab69f00509828ce2d583b9dde9130499/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d637970726573732d2532334535453545353f7374796c653d666f722d7468652d6261646765266c6f676f3d63797072657373266c6f676f436f6c6f723d303538613565'
                alt='cypress'
              />
              <img
                src='https://camo.githubusercontent.com/38eb294a1bdc730fae415015ecac4d6c009e39d2a9c8f8631f1d16bf3f918189/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d6a6573742d2532334332313332353f7374796c653d666f722d7468652d6261646765266c6f676f3d6a657374266c6f676f436f6c6f723d7768697465'
                alt='Jest'
              />
              <img
                src='https://camo.githubusercontent.com/75aae47c314f4e0e3c2729c983bbc8bd0f3e6e2728d71936ab1aa3c0251929bc/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d54657374696e674c6962726172792d2532334533333333323f7374796c653d666f722d7468652d6261646765266c6f676f3d74657374696e672d6c696272617279266c6f676f436f6c6f723d7768697465'
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
                src='https://camo.githubusercontent.com/c839570bc71901106b11b8411d9277a6a8356a9431e4a16d6c26db82caab7d62/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4d6f6e676f44422d2532333465613934622e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d6d6f6e676f6462266c6f676f436f6c6f723d7768697465'
                alt='MongoDB'
              />
              <img
                src='https://camo.githubusercontent.com/918fce8d50581bd97b7133e677a78ed2cad14f970522f219daaeb6d1c81060e1/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6d7973716c2d2532333030662e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d6d7973716c266c6f676f436f6c6f723d7768697465'
                alt='MySQL'
              />
              <img
                src='https://camo.githubusercontent.com/29e7fc6c62f61f432d3852fbfa4190ff07f397ca3bde27a8196bcd5beae3ff77/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f706f7374677265732d2532333331363139322e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d706f737467726573716c266c6f676f436f6c6f723d7768697465'
                alt='Postgres'
              />
              <img
                src='https://camo.githubusercontent.com/ebd60befd49443c14417baff1700c7887f1a3c9c171612b2021a24c597e4b2ea/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f72656469732d2532334444303033312e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d7265646973266c6f676f436f6c6f723d7768697465'
                alt='Redis'
              />
            </p>
            <h4>Package managers</h4>
            <p>
              <img
                src='https://camo.githubusercontent.com/b47580b7e8e0b4ce9bb718070140318f72d316a0c88e0dd53a5ac4b0bdfc755e/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4e504d2d2532333030303030302e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d6e706d266c6f676f436f6c6f723d7768697465'
                alt='NPM'
              />
              <img
                src='https://camo.githubusercontent.com/fd232c52265a587ee5408f80de8736329ae914ca10caa506e4133cb0c5286a10/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f7961726e2d2532333243384542422e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d7961726e266c6f676f436f6c6f723d7768697465'
                alt='Yarn'
              />
            </p>
            <h4>Builders</h4>
            <p>
              <img
                src='https://camo.githubusercontent.com/cfb221c05f485331b66bcf123878fc7de981faffc16fe430ff53bb1ad4f41aad/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f7765627061636b2d2532333844443646392e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d7765627061636b266c6f676f436f6c6f723d626c61636b'
                alt='Webpack'
              />
              <img
                src='https://camo.githubusercontent.com/3a1853bcde3555bc65ea48d85c4fe4abc44143c663ccab970765f0f9355e3588/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f45534c696e742d3442333236333f7374796c653d666f722d7468652d6261646765266c6f676f3d65736c696e74266c6f676f436f6c6f723d7768697465'
                alt='ESLint'
              />
              <img
                src='https://camo.githubusercontent.com/a8b1da67e08c2cb950a978c27d56b7a966427a4f911fe142843b8cc2aa6a1db5/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f426162656c2d4639444333653f7374796c653d666f722d7468652d6261646765266c6f676f3d626162656c266c6f676f436f6c6f723d626c61636b'
                alt='Babel'
              />
              <img
                src='https://camo.githubusercontent.com/ab0162d43b2780ea6f028275ec59df2cf9f5128b478e379de86926a9c52bf556/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f676974687562616374696f6e732d2532333236373145352e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d676974687562616374696f6e73266c6f676f436f6c6f723d7768697465'
                alt='GitHub Actions'
              />
            </p>
          </Column>
          <Column xs={6}>
            <h4>Servers</h4>
            <p>
              <img
                src='https://img.shields.io/badge/nginx-%23009639.svg?style=for-the-badge&logo=nginx&logoColor=white'
                alt='Nginx'
              />
              <img
                src='https://img.shields.io/badge/apache-%23D42029.svg?style=for-the-badge&logo=apache&logoColor=white'
                alt='Apache'
              />
            </p>
            <h4>Hosts</h4>
            <p>
              <img
                src='https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7'
                alt='Netlify'
              />
              <img
                src='https://img.shields.io/badge/SCALEWAY-%234f0599.svg?style=for-the-badge&logo=scaleway&logoColor=white'
                alt='Scaleway'
              />
            </p>
            <h4>Tools</h4>
            <p>
              <img
                src='https://img.shields.io/badge/Insomnia-black?style=for-the-badge&logo=insomnia&logoColor=5849BE'
                alt='Insomnia'
              />
              <img
                src='https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white'
                alt='Visual Studio Code'
              />
              <img
                src='https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white'
                alt='Git'
              />
              <img
                src='https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white'
                alt='GitHub'
              />
              <img
                src='https://img.shields.io/badge/mac%20os-000000?style=for-the-badge&logo=macos&logoColor=F0F0F0'
                alt='Mac OS'
              />
              <img
                src='https://img.shields.io/badge/Google%20Chrome-4285F4?style=for-the-badge&logo=GoogleChrome&logoColor=white'
                alt='Google Chrome'
              />
              <img
                src='https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white'
                alt='Docker'
              />
              <img
                src='https://img.shields.io/badge/jira-%230A0FFF.svg?style=for-the-badge&logo=jira&logoColor=white'
                alt='Jira'
              />
              <img
                src='https://img.shields.io/badge/-Swagger-%23Clojure?style=for-the-badge&logo=swagger&logoColor=white'
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
