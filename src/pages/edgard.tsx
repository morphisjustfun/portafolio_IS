import { ReactElement } from 'react';

import CplusplusIcon from '@/assets/icons/programming_languages/cplusplus.svg';
import CssIcon from '@/assets/icons/programming_languages/css.svg';
import ElectronIcon from '@/assets/icons/programming_languages/electron.svg';
import GitIcon from '@/assets/icons/programming_languages/git.svg';
import JavascriptIcon from '@/assets/icons/programming_languages/javascript.svg';
import PostgresqlIcon from '@/assets/icons/programming_languages/postgresql.svg';
import PythonIcon from '@/assets/icons/programming_languages/python.svg';
import ReactIcon from '@/assets/icons/programming_languages/react.svg';
import TypescriptIcon from '@/assets/icons/programming_languages/typescript.svg';
import EdgardImage from '@/assets/images/edgard.jpeg';
import Card from '@/components/molecules/Card';
import NavigationDrawer from '@/components/organisms/NavigationDrawer';
import { Meta } from '@/layout/Meta';
import { Main } from '@/templates/Main';
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
      link: 'https://github.com/Edgar1548',
    },
    {
      icon: EmailIcon,
      link: 'mailto:edgar.chacon@utec.edu.pe',
    },
    {
      icon: LinkedinIcon,
      link: 'https://www.linkedin.com/in/edgar-santos-chacon-arrospide-1ab880231',
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
    ],
  };
  return (
    <Main
      meta={
        <Meta
          title="Edgard Chacon"
          description="Edgar Chacon - About me - 

Estudiante de 6to ciclo de Ciencia de la Computación en UTEC, acreedor de Beca 18. Experiencia en programación con Python , C++, JS, React, Html y Css,. Considero que soy una persona paciente, y apasionado con el desarrollo full stack. Busca experiencias como desarrollador en este ámbito.
    "
        />
      }
    >
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-7 m-7">
        <Card title="Myself">
          Estudiante de 6to ciclo de Ciencia de la Computación en UTEC, acreedor de Beca 18. Experiencia en programación con Python , C++, JS, React, Html y Css,. Considero que soy una persona paciente, y apasionado con el desarrollo full stack. Busca experiencias como desarrollador en este ámbito.
        </Card>
        <Card
          additionalClasses="lg:row-span-2 order-3 lg:order-none"
          title="Technologies"
          listItems={programmingLanguages}
        >
          During my career as a software developer I have worked with several
          programming languages and frameworks including:
        </Card>
        <Card title="Personal objectives" image={EdgardImage}>
          Encontrar un trabajo que me apasione y me permita aplicar todo lo aprendido
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
  return <NavigationDrawer labelActive="EDGARD">{page}</NavigationDrawer>;
};

export default Index;
