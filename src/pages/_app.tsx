import { ReactElement, ReactNode } from 'react';

import { NextPage } from 'next';
import { AppProps } from 'next/app';

import '../styles/global.css';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page: any) => page);
  return (
    <div className="antialiased w-full">
      {getLayout(<Component {...pageProps} />)}
    </div>
  );
};

export default MyApp;
