import { FC } from 'react';

interface ICircleTextProps {
  children: React.ReactNode;
}

const CircleText: FC<ICircleTextProps> = (props) => {
  return (
    <div className="flex w-[40px] h-[40px] bg-light-tertiary rounded-full justify-center items-center text-light-surface">
      {(props.children as string).toUpperCase()}
    </div>
  );
};

export default CircleText;
