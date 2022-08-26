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
            technology: 'HTML / CSS / Javascript',
            use: 'Web frontend',
          },
          {
            technology: 'Flask / Python',
            use: 'Web backend',
          },
          {
            technology: 'Github / Git',
            use: 'VCS',
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

const LegacyWordpressWebsiteReplacement = () => {
  return (
    <Main
      meta={
        <Meta
          title="Legacy Wordpress website replacement"
          description="Legacy Wordpress website replacement - Clear and concise website to display dynamic data from a database"
        />
      }
    >
      <div className="mt-7 mx-20 flex justify-center flex-col">
        <Banner
          title="Legacy Wordpress website replacement"
          description="Clear and concise website to display dynamic data from a database"
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

LegacyWordpressWebsiteReplacement.getLayout = (page: ReactElement) => {
  return <NavigationDrawer labelActive="WORK">{page}</NavigationDrawer>;
};

export default LegacyWordpressWebsiteReplacement;
