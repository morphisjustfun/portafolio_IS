import { ReactElement } from 'react';

import CovidTrackerLogo from '@/assets/images/university/covid_tracker/main1.png';
import DrivingTestLogo from '@/assets/images/university/driving_test/main1.png';
import MinimumFlightDistanceLogo from '@/assets/images/university/minimum_flight_distance/main1.png';
import StudentEnrollmentLogo from '@/assets/images/university/student_enrollment_projection/main1.png';
import Card from '@/components/molecules/Card';
import NavigationDrawer from '@/components/organisms/NavigationDrawer';
import { Meta } from '@/layout/Meta';
import { Main } from '@/templates/Main';

const University = () => {
  return (
    <Main
      meta={
        <Meta
          title="University projects"
          description="Mario Rios - University projects"
        />
      }
    >
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-7 m-7">
        <Card
          title="Covid tracker"
          image={CovidTrackerLogo}
          showButtons
          projectLink="university/covid_tracker"
        >
          COVID-19 risk calculator app.
        </Card>
        <Card
          title="Driving test administration"
          image={DrivingTestLogo}
          showButtons
          projectLink="university/driving_test_administration"
        >
          Helper app for driving tests.
        </Card>
        <Card
          title="Students enrollment projection"
          image={StudentEnrollmentLogo}
          showButtons
          projectLink="university/students_enrollment_projection"
        >
          Students projection service for university enrollment.
        </Card>
        <Card
          title="Minimum flight distance"
          image={MinimumFlightDistanceLogo}
          showButtons
          projectLink="university/minimum_flight_distance"
        >
          Minimum flight distance finder using a database of airports.
        </Card>
      </div>
    </Main>
  );
};

University.getLayout = (page: ReactElement) => {
  return <NavigationDrawer labelActive="UNIVERSITY">{page}</NavigationDrawer>;
};

export default University;
