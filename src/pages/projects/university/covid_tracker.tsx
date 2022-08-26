import { ReactElement, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import CovidTrackerImage2Device from '@/assets/images/university/covid_tracker/main2_device.png';
import CovidTrackerImage3Device from '@/assets/images/university/covid_tracker/main3_device.png';
import CovidTrackerImage4Device from '@/assets/images/university/covid_tracker/main4_device.png';
import CovidTrackerImage5 from '@/assets/images/university/covid_tracker/main5.png';
import CovidTrackerImage6Device from '@/assets/images/university/covid_tracker/main6_device.png';
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
            Teamed with 6 people to develop and deploy a COVID risk calculator
            app for NASA contest using real time data sources including
            environmental, demographic and external factors. A mobile graphical
            interface and statistical backend service were also implemented
            separately.
          </p>
        </div>
        <div className="flex justify-center">
          <div className="mr-2">
            <Image src={CovidTrackerImage2Device} alt="" />
          </div>
          <div className="ml-2">
            <Image src={CovidTrackerImage3Device} alt="" />
          </div>
        </div>
      </div>
      <LineDivider />
      <div className="my-14">
        <div className="flex justify-center">
          <Image src={CovidTrackerImage5} alt="" />
        </div>
        <h1 className="text-4xl mt-8 mb-4"> Statistical model </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
          <p>
            Our model is composed by 3 main layers: COVID epidemiological
            context, environmental context and vaccination and reinfection rate.
          </p>
          <p>
            Epidemiological and environmental data came from real time data
            sources which provide public APIs (Waqi and OpenCovid).
          </p>
          <p>
            Data was processed in a backend server in order to serve as a REST
            API for the mobile application.
          </p>
        </div>
      </div>
      <LineDivider />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 my-14">
        <div className="flex justify-center flex-col">
          <h1 className="text-4xl mb-4"> Design </h1>
          <p>
            Covid Tracker uses a palette composed of green - turquoise colors in
            order to provide a fresh look to final users. Risk percentage is
            easily identified using specific colors tag for each degree.
          </p>
        </div>
        <div className="flex justify-center">
          <div className="mr-2">
            <Image src={CovidTrackerImage4Device} alt="" />
          </div>
          <div className="ml-2">
            <Image src={CovidTrackerImage6Device} alt="" />
          </div>
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
            technology: 'Flask / Python',
            use: 'REST API',
          },
          {
            technology: 'Heroku',
            use: 'Backend deployment',
          },
          {
            technology: 'Jupyter',
            use: 'Statistical model',
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
              <Link href="https://github.com/morphisjustfun/Nasa-challenge-Frontend">
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
            resource: 'Backend',
            link: (
              <Link href="https://github.com/morphisjustfun/Nasa-challenge-Backend">
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
            resource: 'Statistical model',
            link: (
              <Link href="https://github.com/morphisjustfun/NASA_CHALLENGE_UTILS">
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
              <Link href="https://www.figma.com/file/Q0NiCGksov3B7FWFMnpVT0/SPACE-CHALLENGE?node-id=567%3A3131">
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

const CovidTracker = () => {
  const [currentTab, setCurrentTab] = useState<UniversityTabs>('OVERVIEW');
  return (
    <Main
      meta={
        <Meta
          title="Covid tracker project"
          description="Covid tracker project - COVID-19 risk calculator app"
        />
      }
    >
      <div className="mt-7 mx-20 flex justify-center flex-col">
        <Banner
          title="Covid Tracker"
          description="COVID-19 risk calculator app"
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

CovidTracker.getLayout = (page: ReactElement) => {
  return <NavigationDrawer labelActive="UNIVERSITY">{page}</NavigationDrawer>;
};

export default CovidTracker;
