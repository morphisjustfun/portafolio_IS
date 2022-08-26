import { FC } from 'react';

import LineDivider from './LineDivider';
import { SvgProps } from '@/utils/Types';

export interface IListCardItemProps {
  elements: {
    text: string;
    icon?: SvgProps;
  }[];
}

const ListCard: FC<IListCardItemProps> = (props) => {
  return (
    <div>
      {props.elements.map((element, index) => {
        return (
          <div key={element.text}>
            <div className="flex bg-gradient-to-t from-light-surface-gradient-2 to-light-surface-gradient-2 bg-light-surface2 p-5">
              {element.icon && <img src={element.icon.src} alt="" />}
              <span className="pl-5">{element.text}</span>
            </div>
            {index !== props.elements.length - 1 ? (
              <LineDivider color="surface-variant" />
            ) : null}
          </div>
        );
      })}
    </div>
  );
};

export default ListCard;
