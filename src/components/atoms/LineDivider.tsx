import { FC } from 'react';

interface ILineDividerProps {
  color?: string;
}

const LineDivider: FC<ILineDividerProps> = (props) => {
  const color = props.color ?? 'outline';
  return <div className={` bg-light-${color} w-auto h-[0.0625rem]`} />;
};

export default LineDivider;
