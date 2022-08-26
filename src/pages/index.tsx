import { ReactElement } from 'react';

import CplusplusIcon from '@/assets/icons/programming_languages/cplusplus.svg';
import CssIcon from '@/assets/icons/programming_languages/css.svg';
import ElectronIcon from '@/assets/icons/programming_languages/electron.svg';
import FlutterIcon from '@/assets/icons/programming_languages/flutter.svg';
import GitIcon from '@/assets/icons/programming_languages/git.svg';
import JavascriptIcon from '@/assets/icons/programming_languages/javascript.svg';
import JupyterIcon from '@/assets/icons/programming_languages/jupyter.svg';
import NodeJsIcon from '@/assets/icons/programming_languages/node_js.svg';
import PostgresqlIcon from '@/assets/icons/programming_languages/postgresql.svg';
import PythonIcon from '@/assets/icons/programming_languages/python.svg';
import ReactIcon from '@/assets/icons/programming_languages/react.svg';
import TypescriptIcon from '@/assets/icons/programming_languages/typescript.svg';
import LatamImage from '@/assets/images/latam.png';
import Card from '@/components/molecules/Card';
import NavigationDrawer from '@/components/organisms/NavigationDrawer';
import { Meta } from '@/layout/Meta';
import { Main } from '@/templates/Main';
import MarioImage from '@/assets/images/mario.jpeg';
import FlowerContainer from '@/assets/containers/flower.svg';
import EmailIcon from '@/assets/icons/email.svg';
import GithubIcon from '@/assets/icons/github.svg';
import LinkedinIcon from '@/assets/icons/linkedin.svg';
import Link from 'next/link';

const Index = () => {
  // const router = useRouter();

  const socialNetworks = [
    {
      icon: GithubIcon,
      link: 'https://github.com/morphisjustfun',
    },
    {
      icon: EmailIcon,
      link: 'mailto:mariojacobo2011@gmail.com',
    },
    {
      icon: LinkedinIcon,
      link: 'https://www.linkedin.com/in/mario-jacobo-rios-gamboa/?locale=en_US',
    },
  ];

  const programmingLanguages = {
    elements: [
      {
        text: 'React / React Native',
        icon: ReactIcon,
      },
      {
        text: 'Git / Github',
        icon: GitIcon,
      },
      {
        text: 'HTML / CSS',
        icon: CssIcon,
      },
      {
        text: 'Electron',
        icon: ElectronIcon,
      },
      {
        text: 'Javascript (ES6+)',
        icon: JavascriptIcon,
      },
      {
        text: 'Typescript',
        icon: TypescriptIcon,
      },
      {
        text: 'Node.js',
        icon: NodeJsIcon,
      },
      {
        text: 'Flutter',
        icon: FlutterIcon,
      },
      {
        text: 'SQL / PostgreSQL',
        icon: PostgresqlIcon,
      },
      {
        text: 'Python',
        icon: PythonIcon,
      },
      {
        text: 'C++',
        icon: CplusplusIcon,
      },
      {
        text: 'Jupyter / Matplotlib / Pandas',
        icon: JupyterIcon,
      },
    ],
  };
  return (
    <Main
      meta={
        <Meta
          title="Mario Rios"
          description="Mario Rios - About me - 

          Hello there! My name is Mario Rios and I am a young Computer Science
          student who enjoy building software solutions for any kind of need.
    "
        />
      }
    >
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-7 m-7">
        <Card title="Myself">
          Hello there! My name is Mario Rios and I am a young Computer Science
          student who enjoy building software solutions for any kind of need.
          <br /> <br />
          My interest on software development was born when my father told me
          that his company needs a more expressive and clear webpage as well as
          a database to organise its information. All this stack was originally
          developed with Wordpress and my responsability was to migrate all this
          information into a new platform. Turns out that this adventure would
          taught me a lot about Frontend and Backend development including
          deployment services like AWS. <br /> <br /> Fast-forward to today, and
          currently my interest and domain are not limited to webpages as I’ve
          also got strong background in mobile, desktop and even console
          applications.
        </Card>
        <Card
          additionalClasses="lg:row-span-2 order-3 lg:order-none"
          title="Technologies"
          listItems={programmingLanguages}
        >
          During my career as a software developer I have worked with several
          programming languages and frameworks including:
        </Card>
        <Card title="Personal objectives" image={MarioImage}>
          I firmly believe in the consolidation of Latin America as a
          technological leader. In fact I consider myself as a promoter of this
          movement. <br /> <br /> The global health disease due to COVID-19 has
          emphasized this trend. That’s why in a world where physical
          interactions are restricted and education is disrupted. I stand out
          sharing my knowledge and making useful software for the tomorrow’s
          society.
        </Card>
      </div>

      <div className="flex-1 flex items-center justify-center flex-col">
        <div className="flex my-5">
          {socialNetworks.map(({ icon, link }) => (
            <Link href={link} key={link}>
              <a target="_blank" rel="noopener noreferrer">
                <img
                  className="block mx-5 cursor-pointer"
                  src={icon.src}
                  alt=""
                />
              </a>
            </Link>
          ))}
        </div>
      </div>
    </Main>
  );
};

Index.getLayout = (page: ReactElement) => {
  return <NavigationDrawer labelActive="MARIO">{page}</NavigationDrawer>;
};

export default Index;
