import { ReactElement, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import StudentsEnrollmentProjectionImage10 from '@/assets/images/university/student_enrollment_projection/main10.png';
import StudentsEnrollmentProjectionImage7 from '@/assets/images/university/student_enrollment_projection/main7.png';
import StudentsEnrollmentProjectionImage9 from '@/assets/images/university/student_enrollment_projection/main9.png';
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
            Analyzed over 10,000 database rows to implement and deploy student
            projection service for university enrollment by designing a web
            graphical interface and statistical backend service.&nbsp;
            <strong>Awarded as the best project.</strong>
          </p>
        </div>
        <div className="flex justify-center">
          <Image src={StudentsEnrollmentProjectionImage9} alt="" />
        </div>
      </div>
      <LineDivider />
      <div className="my-14">
        <div className="flex justify-center">
          <Image src={StudentsEnrollmentProjectionImage7} alt="" />
        </div>
        <h1 className="text-4xl mt-8 mb-4"> Statistical model </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
          <p>
            Our model consists in a linear regression model that predicts the
            number of students that will be enrolled in a given semester and
            course.
          </p>
          <p>
            Using the data from the university enrollment database of previous
            years and Python libraries. We analyzed different variables with the
            help of heat maps, linear plots and so on.
          </p>
          <p>
            We found that the most important variables are: average grade,
            number of students enrolled in the previous semester and average
            number of times the course is taken.
          </p>
        </div>
      </div>
      <LineDivider />

      <div className="my-14">
        <div className="flex justify-center">
          <Image src={StudentsEnrollmentProjectionImage10} alt="" />
        </div>
        <h1 className="text-4xl mt-8 mb-4"> Architecture </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
          <p>
            Our system is composed of 5 main parts: frontend, backend,
            statistical endpoint, database and university enrollment database
            which is read only.
          </p>
          <p>
            Each of these parts is implemented in different languages and hosted
            on different servers.
          </p>
          <p>
            The whole system is protected by an OAuth2 authentication system
            which provides a token to access the backend and statistical
            services. The token is valid for 1 hour.
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
            technology: 'Next.js / React / Bulma',
            use: 'Web frontend',
          },
          {
            technology: 'Github / Git',
            use: 'VCS',
          },
          {
            technology: 'Spring Boot / Java',
            use: 'REST API',
          },
          {
            technology: 'Flask / Python',
            use: 'Statistical endpoint',
          },
          {
            technology: 'Jupyter',
            use: 'Statistical model',
          },
          {
            technology: 'AWS / Heroku',
            use: 'Backend deployment / Frontend deployment',
          },
          {
            technology: 'PostgreSQL',
            use: 'Database',
          },
          {
            technology: 'Jenkins',
            use: 'CI / CD',
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
            resource: 'Web frontend',
            link: (
              <Link href="https://github.com/morphisjustfun/project-frontend-erenlagaviota-backend">
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
            resource: 'REST Backend / Statistical endpoint',
            link: (
              <Link href="https://github.com/cs2901-2021-1/project-backend-erenlagaviota-backend">
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

const StudentsEnrollmentProjection = () => {
  const [currentTab, setCurrentTab] = useState<UniversityTabs>('OVERVIEW');
  return (
    <Main
      meta={
        <Meta
          title="Students enrollment projection project"
          description="Students enrollment projection project - Students projection service for university enrollment"
        />
      }
    >
      <div className="mt-7 mx-20 flex justify-center flex-col">
        <Banner
          title="Students enrollment projection"
          description="Students projection service for university enrollment"
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

StudentsEnrollmentProjection.getLayout = (page: ReactElement) => {
  return <NavigationDrawer labelActive="UNIVERSITY">{page}</NavigationDrawer>;
};

export default StudentsEnrollmentProjection;
