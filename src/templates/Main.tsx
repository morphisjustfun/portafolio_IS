import { ReactNode } from 'react';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
  toggleFixed?: boolean;
};

const Main = (props: IMainProps) => (
  <>
    {props.meta}
    {props.children}
  </>
);

export { Main };
