import { ReactElement, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import Image2Device from '@/assets/images/university/driving_test/main2_device.png';
import Image3Device from '@/assets/images/university/driving_test/main3_device.png';
import Image4Device from '@/assets/images/university/driving_test/main4_device.png';
import LineDivider from '@/components/atoms/LineDivider';
import Banner from '@/components/molecules/Banner';
import LabelSwitcherUniversity from '@/components/molecules/LabelSwitcherUniversity';
import Datatable from '@/components/organisms/Datatable';
import NavigationDrawer from '@/components/organisms/NavigationDrawer';
import { Meta } from '@/layout/Meta';
import { Main } from '@/templates/Main';
import { UniversityTabs } from '@/utils/Types';

const OverviewTab = () => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 my-14">
        <div className="flex justify-center flex-col">
          <h1 className="text-4xl mb-4"> Abstract </h1>
          <p>
            Featured over 5 mockups to develop a helper mobile application for
            driving tests. This application is intended to allow the examiner to
            make the examen in the public road by providing the right security
            system as well as a practical checklist for grading purposes.
          </p>
        </div>
        <div className="flex justify-center">
          <div className="mr-2">
            <Image src={Image2Device} alt="" />
          </div>
          <div className="ml-2">
            <Image src={Image4Device} alt="" />
          </div>
        </div>
      </div>
      <LineDivider />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 my-14">
        <div className="flex justify-center">
          <div>
            <Image src={Image3Device} alt="" />
          </div>
        </div>
        <div className="flex justify-center flex-col">
          <h1 className="text-4xl mb-4"> Design </h1>
          <p>
            The application is designed to be accessible and easy to use. The
            color palette is composed of red - blue colors. The layout is made
            with flexbox to provide consistency and responsiveness.
          </p>
        </div>
      </div>
    </>
  );
};

const TechnologyTab = () => {
  return (
    <div className="flex justify-center my-14">
      <Datatable
        rows={[
          {
            technology: 'React native',
            use: 'Mobile application',
          },
          {
            technology: 'Figma',
            use: 'Mockup',
          },
          {
            technology: 'Github / Git',
            use: 'VCS',
          },
          {
            technology: 'Postman',
            use: 'API Testing',
          },
          {
            technology: 'Jira',
            use: 'Bug tracking',
          },
        ]}
        headers={[
          {
            title: 'Technology',
            key: 'technology',
          },
          {
            title: 'Use',
            key: 'use',
          },
        ]}
      />
    </div>
  );
};

const ResourcesTab = () => {
  return (
    <div className="flex justify-center my-14">
      <Datatable
        rows={[
          {
            resource: 'Mobile application',
            link: (
              <Link href="https://github.com/1v1menub/PI3_proyecto_mtc">
                <a
                  className="text-light-primary underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github repository
                </a>
              </Link>
            ),
          },
          {
            resource: 'Mockup',
            link: (
              <Link href="https://www.figma.com/file/CZK1r3L5nbF6E1bK4iF98q/MockUP-App?node-id=2%3A10">
                <a
                  className="text-light-primary underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Figma project
                </a>
              </Link>
            ),
          },
        ]}
        headers={[
          {
            title: 'Resource',
            key: 'resource',
          },
          {
            title: 'Link',
            key: 'link',
          },
        ]}
      />
    </div>
  );
};

const DrivingTestAdministration = () => {
  const [currentTab, setCurrentTab] = useState<UniversityTabs>('OVERVIEW');
  return (
    <Main
      meta={
        <Meta
          title="Driving test administration"
          description="Driving test administration - Helper app for driving tests"
        />
      }
    >
      <div className="mt-7 mx-20 flex justify-center flex-col">
        <Banner
          title="Driving test administration"
          description="Helper app for driving tests"
        />
        <div className="my-9">
          <LabelSwitcherUniversity
            current={currentTab}
            setCurrent={setCurrentTab}
          />
        </div>
        <LineDivider />
        {currentTab === 'OVERVIEW' && <OverviewTab />}
        {currentTab === 'TECHNOLOGY' && <TechnologyTab />}
        {currentTab === 'RESOURCES' && <ResourcesTab />}
      </div>
    </Main>
  );
};

DrivingTestAdministration.getLayout = (page: ReactElement) => {
  return <NavigationDrawer labelActive="UNIVERSITY">{page}</NavigationDrawer>;
};

export default DrivingTestAdministration;
