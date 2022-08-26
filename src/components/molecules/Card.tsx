import { FC } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import CircleText from '../atoms/CircleText';
import ListCard, { IListCardItemProps } from '../atoms/ListCardItem';
import Button from './Button';

interface ICardProps {
  additionalClasses?: string;
  title: string;
  subtitle?: string;
  image?: StaticImageData;
  children?: React.ReactNode;
  listItems?: IListCardItemProps;
  showButtons?: boolean;
  projectLink?: string;
  externalLink?: string;
}

const Card: FC<ICardProps> = (props) => {
  if (
    props.showButtons !== undefined &&
    props.projectLink === undefined &&
    props.externalLink === undefined
  ) {
    throw new Error(
      'Card: showButtons is true, but no projectlink nor externallink was provided'
    );
  }

  return (
    <div
      className={`flex flex-col bg-light-surface shadow-M3/ElevationLight/2 rounded-lg ${
        props.additionalClasses ?? ''
      }`}
    >
      <div className="flex py-[0.8125rem] px-4 items-center gap-4">
        <CircleText>{props.title[0]}</CircleText>
        <div className="flex flex-col justify-center">
          <h1 className="text-light-on-surface font-semibold">{props.title}</h1>
          {props.subtitle && (
            <p className="text-light-on-surface">{props.subtitle}</p>
          )}
        </div>
      </div>
      {props.image && (
        <Image
          src={props.image}
          alt=""
          objectFit="cover"
          height={400}
          width={999}
          objectPosition="center"
        />
      )}
      <p className="block p-4 text-[0.875rem]">{props.children}</p>
      {props.listItems && <ListCard {...props.listItems} />}
      {props.showButtons && (
        <div className="flex flex-1 justify-end items-end p-4">
          {props.image && (
            <div className="mr-2">
              <Link href={props.image?.src!}>
                <a target="_blank" rel="noopener noreferrer">
                  <Button type="OUTLINED">View full size image</Button>
                </a>
              </Link>
            </div>
          )}
          {props.projectLink && (
            <Link href={props.projectLink!}>
              <a>
                <Button type="FILLED">Discover more</Button>
              </a>
            </Link>
          )}
          {props.externalLink && (
            <Link href={props.externalLink!}>
              <a target="_blank" rel="noopener noreferrer">
                <Button type="FILLED">Discover more</Button>
              </a>
            </Link>
          )}
        </div>
      )}
    </div>
  );
};

export default Card;
