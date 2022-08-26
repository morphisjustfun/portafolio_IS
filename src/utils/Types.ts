import { Dispatch, SetStateAction } from 'react';

export type SetState<T> = Dispatch<SetStateAction<T>>;

export interface SvgProps {
  height: number;
  width: number;
  src: string;
}

export type UniversityTabs = 'OVERVIEW' | 'TECHNOLOGY' | 'RESOURCES';
