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

const ArtCollectionManagmentSystem = () => {
  return (
    <Main
      meta={
        <Meta
          title="Entry authorization system - MINEDU"
          description="Entry authorization system - MINEDU - Mobile application to authenticate incoming workers with their QR code or document number"
        />
      }
    >
      <div className="mt-7 mx-20 flex justify-center flex-col">
        <Banner
          title="Entry authorization system - MINEDU"
          description="Mobile application to authenticate incoming workers with their QR code or document number"
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

ArtCollectionManagmentSystem.getLayout = (page: ReactElement) => {
  return <NavigationDrawer labelActive="WORK">{page}</NavigationDrawer>;
};

export default ArtCollectionManagmentSystem;
