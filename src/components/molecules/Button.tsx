import { FC, ReactNode } from 'react';

import { SvgProps } from '@/utils/Types';

type ButtonType = 'OUTLINED' | 'FILLED' | 'TEXT';

interface IButtonProps {
  type: ButtonType;
  children: ReactNode;
  onClick?: () => void;
  icon?: SvgProps;
  active?: boolean;
}

const Button: FC<IButtonProps> = (props) => {
  let returnComponent = <></>;

  switch (props.type) {
    case 'OUTLINED':
      returnComponent = (
        <button
          className="block bg-light-surface rounded-full border-[1px] border-light-outline hover:bg-light-primary-opacity-0.08 focus:bg-light-primary-opacity-0.12 focus:border-light-primary"
          onClick={props.onClick}
        >
          <span className="block text-light-tertiary px-6 py-[0.625rem] font-medium text-[0.875rem]">
            {props.children}
          </span>
        </button>
      );
      break;
    case 'FILLED':
      returnComponent = (
        <button
          className="block bg-light-tertiary rounded-full hover:shadow-M3/ElevationLight/1 focus:shadow-none"
          onClick={props.onClick}
        >
          <span className="block text-light-on-primary px-6 py-[0.625rem] font-medium text-[0.875rem]">
            {props.children}
          </span>
        </button>
      );
      break;
    case 'TEXT':
      returnComponent = (
        <button
          className={`flex text-light-primary  rounded-full ${
            // is the correct way to do this?
            props.active
              ? 'bg-light-primary-opacity-0.12'
              : 'focus:bg-light-primary-opacity-0.12'
          }  hover:bg-light-primary-opacity-0.08  justify-center items-center px-6`}
          onClick={props.onClick}
        >
          {props.icon && (
            <img className="block mr-2" src={props.icon.src} alt="" />
          )}
          <span className="block text-light-tertiary  py-[0.625rem] font-medium text-[0.875rem]">
            {props.children}
          </span>
        </button>
      );
      break;
    default:
      throw new Error('Button type not supported');
  }

  return returnComponent;
};

export default Button;
