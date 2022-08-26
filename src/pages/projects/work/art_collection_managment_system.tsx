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
            technology: 'React / Material-UI',
            use: 'Web frontend',
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
            technology: 'Github actions',
            use: 'CI / CD',
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
          title="Art collection managment system"
          description="Art collection managment system - Internal web application to handle stock of artworks"
        />
      }
    >
      <div className="mt-7 mx-20 flex justify-center flex-col">
        <Banner
          title="Art collection managment system"
          description="Internal web application to handle stock of artworks"
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
