import { ReactElement } from 'react';

import Link from 'next/link';

import FlowerContainer from '@/assets/containers/flower.svg';
import EmailIcon from '@/assets/icons/email.svg';
import GithubIcon from '@/assets/icons/github.svg';
import LinkedinIcon from '@/assets/icons/linkedin.svg';
import NavigationDrawer from '@/components/organisms/NavigationDrawer';
import { Meta } from '@/layout/Meta';
import { Main } from '@/templates/Main';

const Contact = () => {
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

  return (
    <Main
      meta={<Meta title="Contact me" description="Mario Rios - Contact me" />}
      toggleFixed
    >
      <div className="flex-1 flex items-center justify-center flex-col">
        <div className="w-64 h-64 relative my-5">
          <img
            src={FlowerContainer.src}
            alt=""
            className="text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full"
          />
          <h1 className="text-3xl font-medium text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            ESTO ES UN EASTER EGG
          </h1>
        </div>
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

Contact.getLayout = (page: ReactElement) => {
  return <NavigationDrawer labelActive="CONTACT_ME">{page}</NavigationDrawer>;
};

export default Contact;
