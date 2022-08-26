import { ReactElement } from 'react';

import Nvim_code2textLogo from '@/assets/images/open_source/nvim_code2text/main1.png';
import PluginContributorLogo from '@/assets/images/open_source/plugin_contributor/main1.png';
import Card from '@/components/molecules/Card';
import NavigationDrawer from '@/components/organisms/NavigationDrawer';
import { Meta } from '@/layout/Meta';
import { Main } from '@/templates/Main';

const OpenSource = () => {
  return (
    <Main
      meta={
        <Meta
          title="Open source projects"
          description="Mario Rios - Open source projects"
        />
      }
    >
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-7 m-7">
        <Card
          title="Nvim-code2text"
          image={Nvim_code2textLogo}
          showButtons
          externalLink="https://github.com/morphisjustfun/nvim-code2text"
        >
          Plugin to use a programming language as an input for editor. Made with
          Lua using Neovim APIs.
        </Card>
        <Card
          title="Neovim plugin contributor"
          image={PluginContributorLogo}
          showButtons
          externalLink="https://github.com/Pocco81/DAPInstall.nvim/pull/37#event-5405309365"
        >
          Contribution to the open-source community by making pull requests and
          sharing my own configuration.
        </Card>
      </div>
    </Main>
  );
};

OpenSource.getLayout = (page: ReactElement) => {
  return <NavigationDrawer labelActive="OPEN_SOURCE">{page}</NavigationDrawer>;
};

export default OpenSource;
