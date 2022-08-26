import { ReactElement } from 'react';

import Card from '@/components/molecules/Card';
import NavigationDrawer from '@/components/organisms/NavigationDrawer';
import { Meta } from '@/layout/Meta';
import { Main } from '@/templates/Main';

const Work = () => {
  return (
    <Main
      meta={
        <Meta title="Work projects" description="Mario Rios - Work projects" />
      }
    >
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-7 m-7">
        <Card
          title='Mobile "Services Rendered" Application - Suit Kote'
          showButtons
          projectLink="work/mobile_services_rendered"
          subtitle="Titanius Consulting S.R.L."
        >
          Queried more than 20,000 entries from API to be saved in a local
          database in order to allow supervisors to register services rendered
          without an active internet connection. Changes are saved locally and
          synchronized when there is an active internet connection.
        </Card>
        <Card
          title="Entry authorization system - MINEDU"
          showButtons
          projectLink="work/entry_authorization_system"
          subtitle="Titanius Consulting S.R.L."
        >
          Featured over 6 mockups models to create a mobile application to
          authorize the arrival of MINEDU workers by using a QR code or their
          document ID.
        </Card>
        <Card
          title="Art collection managment system"
          showButtons
          projectLink="work/art_collection_managment_system"
          subtitle="Hochschild Mining plc"
        >
          Featured over 10 mockups models to replace legacy art collection
          management system by implementing an intuitive web app and connecting
          it to a backend endpoint.
        </Card>
        <Card
          title="Desktop application to handle sales"
          showButtons
          projectLink="work/desktop_application_handle"
          subtitle='Corporación Empresarial Educativa "San Vicente" E.I.R.L.'
        >
          Parsed over 1,000 excel spreadsheets to increase overall experience
          with internal selling logistic by developing and deploying a desktop
          application. Including a backend endpoint and a database.
        </Card>
        <Card
          title="Legacy Wordpress website replacement"
          showButtons
          projectLink="work/legacy_wordpress_website_replacement"
          subtitle='Corporación Empresarial Educativa "San Vicente" E.I.R.L.'
        >
          Queried and joined over 14 tables to replace legacy Wordpress website
          and provide it with dynamic content. Which is administered through the
          desktop application.
        </Card>
      </div>
    </Main>
  );
};

Work.getLayout = (page: ReactElement) => {
  return <NavigationDrawer labelActive="WORK">{page}</NavigationDrawer>;
};

export default Work;
