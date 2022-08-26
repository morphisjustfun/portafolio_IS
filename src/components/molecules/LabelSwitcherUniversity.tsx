import { FC } from 'react';

import Button from './Button';
import OverviewIcon from '@/assets/icons/overview.svg';
import ShareIcon from '@/assets/icons/share.svg';
import TechnologyIcon from '@/assets/icons/technology.svg';
import { SetState, UniversityTabs } from '@/utils/Types';

interface ILabelSwitcherUniversityProps {
  current: UniversityTabs;
  setCurrent: SetState<UniversityTabs>;
}

const LabelSwitcherUniversity: FC<ILabelSwitcherUniversityProps> = (props) => {
  return (
    <div className="flex justify-center">
      <div className="px-2">
        <Button
          type="TEXT"
          icon={OverviewIcon}
          active={props.current === 'OVERVIEW'}
          onClick={() => props.setCurrent('OVERVIEW')}
        >
          Overview
        </Button>
      </div>
      <div className="px-2">
        <Button
          type="TEXT"
          icon={TechnologyIcon}
          active={props.current === 'TECHNOLOGY'}
          onClick={() => props.setCurrent('TECHNOLOGY')}
        >
          Technologies
        </Button>
      </div>
      <div className="px-2">
        <Button
          type="TEXT"
          icon={ShareIcon}
          active={props.current === 'RESOURCES'}
          onClick={() => props.setCurrent('RESOURCES')}
        >
          Resources
        </Button>
      </div>
    </div>
  );
};

export default LabelSwitcherUniversity;
