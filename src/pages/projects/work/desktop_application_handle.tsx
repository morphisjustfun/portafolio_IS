import { ReactElement } from 'react';

import TechnologyIcon from '@/assets/icons/technology.svg';
import LineDivider from '@/components/atoms/LineDivider';
import Banner from '@/components/molecules/Banner';
import Button from '@/components/molecules/Button';
import Datatable from '@/components/organisms/Datatable';
import NavigationDrawer from '@/components/organisms/NavigationDrawer';
import { Meta } from '@/layout/Meta';
import { Main } from '@/templates/Main';

const TechnologyTab = () => {
  return (
    <div className="flex justify-center my-14">
      <Datatable
        rows={[
          {
            technology: 'React / Electron / Bulma',
            use: 'Desktop application',
          },
          {
            technology: 'Flask / Python',
            use: 'Backend server',
          },
          {
            technology: 'PostgreSQL',
            use: 'Database',
          },
          {
            technology: 'AWS',
            use: 'Cloud infrastructure',
          },
          {
            technology: 'Postman',
            use: 'API Testing',
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

const DesktopApplicationHandle = () => {
  return (
    <Main
      meta={
        <Meta
          title="Desktop application to handle sales"
          description="Desktop application to handle sales - Desktop application designed to increase overall experience with internal selling logistic"
        />
      }
    >
      <div className="mt-7 mx-20 flex justify-center flex-col">
        <Banner
          title="Desktop application to handle sales"
          description="Desktop application designed to increase overall experience with internal selling logistic"
        />
        <div className="my-9">
          <div className="flex justify-center">
            <div className="px-2">
              <Button type="TEXT" icon={TechnologyIcon} active>
                Technologies
              </Button>
            </div>
          </div>
        </div>
        <LineDivider />
        <TechnologyTab />
      </div>
    </Main>
  );
};

DesktopApplicationHandle.getLayout = (page: ReactElement) => {
  return <NavigationDrawer labelActive="WORK">{page}</NavigationDrawer>;
};

export default DesktopApplicationHandle;
