import { FC, ReactNode, useRef } from 'react';

import Link from 'next/link';

import AboutMeIcon from '@/assets/icons/aboutMe.svg';
import ContactMeIcon from '@/assets/icons/contactMe.svg';
import OpenSidebarIcon from '@/assets/icons/openSidebar.svg';
import OpenSourceIcon from '@/assets/icons/openSource.svg';
import UniversityIcon from '@/assets/icons/university.svg';
import WorkIcon from '@/assets/icons/work.svg';
import LineDivider from '@/components/atoms/LineDivider';
import { SvgProps } from '@/utils/Types';

export type LabelActive =
  | 'LUIS'
  | 'MARIO'
  | 'EDGARD'
  | 'ABOUT_ME'
  | 'CONTACT_ME'
  | 'OPEN_SOURCE'
  | 'UNIVERSITY'
  | 'WORK';

interface ILabelProps {
  children: ReactNode;
  icon: SvgProps;
  active: boolean;
  href: string;
}

const Label: FC<ILabelProps> = (props) => {
  if (props.active) {
    return (
      <Link href={props.href} replace>
        <a className="flex justify-center md:justify-start py-3 font-semibold px-6 bg-light-secondary-container rounded-full text-light-on-secondary-container my-2">
          <img src={props.icon.src} alt="" className="inline md:pr-4" />
          <span className="hidden md:inline">{props.children}</span>
        </a>
      </Link>
    );
  }
  return (
    <Link href={props.href} replace>
      <a className="flex justify-center md:justify-start py-3 text-light-on-surface-variant font-semibold px-6 hover:bg-light-secondary-container rounded-full hover:text-light-on-secondary-container my-2">
        <img src={props.icon.src} alt="" className="inline md:pr-4" />
        <span className="hidden md:inline">{props.children}</span>
      </a>
    </Link>
  );
};

interface ILabelSeparatorProps {
  children: ReactNode;
}

const LabelSeparator: FC<ILabelSeparatorProps> = (props) => {
  return (
    <span className="py-3 text-light-on-surface-variant font-bold px-6 my-2 hidden md:block">
      {props.children}
    </span>
  );
};

interface INavigationDrawerProps {
  children: ReactNode;
  labelActive: LabelActive;
  toggleFixed?: boolean;
  // open?: boolean;
}

const NavigationDrawer: FC<INavigationDrawerProps> = (props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const open = useRef(true);
  return (
    <div className="relative min-h-screen flex">
      <div
        className={`fixed h-full bg-gradient-to-t from-light-surface-gradient to-light-surface-gradient bg-light-surface1 text-light-primary py-4 transition-width duration-500 ${open.current ? '2xl:w-96 md:w-48 w-24 px-3' : 'w-0'
          }`}
        ref={containerRef}
      >
        <div className={`${open.current ? '' : 'hidden'}`} ref={navRef}>
          <span className="flex justify-center md:justify-start text-light-primary font-bold px-6 tracking-wide text-xl  md:hidden">
            M
          </span>
          <span className="py-4 text-light-primary font-bold px-6 tracking-wide text-xl hidden md:block">
            GRUPO EREN LA GAVIOTA
          </span>
          <nav>
            <LineDivider />
            <LabelSeparator>Integrantes</LabelSeparator>
            <Label
              icon={WorkIcon}
              active={props.labelActive === 'LUIS'}
              href="/luis"
            >
              Luis
            </Label>
            <Label
              icon={UniversityIcon}
              active={props.labelActive === 'MARIO'}
              href="/"
            >
              Mario
            </Label>
            <Label
              icon={OpenSourceIcon}
              active={props.labelActive === 'EDGARD'}
              href="/edgard"
            >
              Edgard
            </Label>
          </nav>
        </div>
      </div>

      <div
        className={
          open.current
            ? 'flex-1 flex flex-col 2xl:ml-96 md:ml-48 ml-24 transition-margin duration-500'
            : 'flex-1 flex flex-col transition-margin duration-500'
        }
        ref={contentRef}
      >
        <div className={props.toggleFixed ? 'fixed' : ''}>
          <img
            src={OpenSidebarIcon.src}
            alt=""
            className="inline cursor-pointer ml-7 my-6"
            onClick={async () => {
              open.current = !open.current;
              ['2xl:w-96', 'w-0', 'md:w-48', 'w-24'].forEach((className) => {
                containerRef.current?.classList.toggle(className);
              });
              ['2xl:ml-96', 'md:ml-48', 'ml-24'].forEach((className) => {
                contentRef.current?.classList.toggle(className);
              });
              if (open.current) {
                await new Promise((resolve) => {
                  setTimeout(resolve, 500);
                });
              }
              containerRef.current?.classList.toggle('px-3');
              navRef.current?.classList.toggle('hidden');
            }}
          />
        </div>
        {props.children}
      </div>
    </div>
  );
};

export default NavigationDrawer;
