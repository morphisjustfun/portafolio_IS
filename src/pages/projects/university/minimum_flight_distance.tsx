import { ReactElement, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import Image2 from '@/assets/images/university/minimum_flight_distance/main2.png';
import Image3 from '@/assets/images/university/minimum_flight_distance/main3.png';
import Image4 from '@/assets/images/university/minimum_flight_distance/main4.png';
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
            Collected over 1,000 airports registers to implement a minimum
            flight distance finder in university’s course project by
            implementing a JSON - Graph parser, A-Star algorithm and a simple
            graphical interface.&nbsp;
            <strong>Awarded as the best project.</strong>
          </p>
        </div>
        <div className="flex justify-center">
          <Image src={Image4} alt="" />
        </div>
      </div>
      <LineDivider />
      <div className="my-14">
        <div className="flex justify-center">
          <Image src={Image3} alt="" />
        </div>
        <h1 className="text-4xl mt-8 mb-4">Desktop Application</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
          <p>
            The desktop application is a simple graphical interface that allows
            a user to select a starting and ending airport, and then find the
            shortest path between the two airports.
          </p>
          <p>
            The airports database is a JSON file which is mapped to a graph in
            C++. The shortest path is found using the A-Star algorithm and
            displayed in a list to the user.
          </p>
          <p>
            All the data structures and algorithms are implemented using the
            typical header and implementation files.
          </p>
        </div>
      </div>
      <LineDivider />

      <div className="my-14">
        <div className="flex justify-center">
          <Image src={Image2} alt="" />
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
            technology: 'QT / C++',
            use: 'Frontend and flight distance calculator',
          },
          {
            technology: 'Cmake',
            use: 'Build system',
          },
          {
            technology: 'JSON',
            use: 'Airports database',
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
            resource: 'Flight distance calculator service',
            link: (
              <Link href="https://github.com/utec-cs-aed-2021-1/proyecto-de-curso-team-triple-for">
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
            resource: 'Desktop application',
            link: (
              <Link href="https://github.com/morphisjustfun/AED-A-GUI">
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

const MinimumFlightDistance = () => {
  const [currentTab, setCurrentTab] = useState<UniversityTabs>('OVERVIEW');
  return (
    <Main
      meta={
        <Meta
          title="Minimum flight distance project"
          description="Minimum flight distance project - Minimum flight distance finder using a database of airports"
        />
      }
    >
      <div className="mt-7 mx-20 flex justify-center flex-col">
        <Banner
          title="Minimum flight distance"
          description="Minimum flight distance finder using a database of airports"
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

MinimumFlightDistance.getLayout = (page: ReactElement) => {
  return <NavigationDrawer labelActive="UNIVERSITY">{page}</NavigationDrawer>;
};

export default MinimumFlightDistance;
