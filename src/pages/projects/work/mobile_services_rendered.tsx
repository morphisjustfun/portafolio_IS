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
            technology: 'Flutter',
            use: 'Mobile application',
          },
          {
            technology: 'SQL / SQLite',
            use: 'Local database',
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

const MobileServicesRendered = () => {
  return (
    <Main
      meta={
        <Meta
          title='Mobile "Services Rendered" Application - Suit Kote'
          description='Mobile "Services Rendered" - Intuitive and user-friendly application for managing services rendered without an active internet connection and syncing with remote server'
        />
      }
    >
      <div className="mt-7 mx-20 flex justify-center flex-col">
        <Banner
          title='Mobile "Services Rendered" Application - Suit Kote'
          description="Intuitive and user-friendly application for managing services rendered without an active internet connection and syncing with remote server"
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

MobileServicesRendered.getLayout = (page: ReactElement) => {
  return <NavigationDrawer labelActive="WORK">{page}</NavigationDrawer>;
};

export default MobileServicesRendered;
