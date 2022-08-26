import { FC } from 'react';

import BannerImage from '@/assets/images/banner.png';

interface IBannerProps {
  title: string;
  description: string;
}

const Banner: FC<IBannerProps> = (props) => {
  return (
    <div
      className=" banner bg-no-repeat w-full bg-cover rounded-[4rem]"
      style={{
        backgroundImage: `url(${BannerImage.src})`,
      }}
    >
      <div className="flex flex-col justify-center max-w-5xl my-0  min-h-[22.5rem]">
        <div className="py-10 px-12">
          <h1 className="text-8xl font-medium mb-1"> {props.title} </h1>
          <p className="text-2xl"> {props.description} </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
