export default interface ICards {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  creater: string;
  isOpen?: boolean;
  modalHandler?: (value: boolean) => void;
}

export type TGetPages = {
  type: string;
  name: string;
  status: string;
  gender: string;
  page?: number;
};

export type TCheckedGender = {
  any: boolean;
  male: boolean;
  female: boolean;
  genderless: boolean;
  unknown: boolean;
};

export type TCheckedStatus = {
  any: boolean;
  alive: boolean;
  dead: boolean;
  unknown: boolean;
};

export type TSeries = {
  name: string;
  date: string;
  episode: string;
  key: string;
};

export type TEpisodes = {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
};

export type TPagesCount = string | number;

export type TActive = 'home' | 'form' | 'about';

export type TGenderKeys =
  | 'any'
  | 'male'
  | 'female'
  | 'genderless'
  | 'unknown_second';

export type TGenderValues = '' | 'male' | 'female' | 'genderless' | 'unknown';

export interface IGender {
  any: TGenderValues;
  male: TGenderValues;
  female: TGenderValues;
  genderless: TGenderValues;
  unknown_second: TGenderValues;
}

export type TStatusKeys = 'any' | 'alive' | 'dead' | 'unknown';

export type TStatusValues = '' | 'alive' | 'dead' | 'unknown';

export interface IStatus {
  any: TStatusValues;
  alive: TStatusValues;
  dead: TStatusValues;
  unknown: TStatusValues;
}