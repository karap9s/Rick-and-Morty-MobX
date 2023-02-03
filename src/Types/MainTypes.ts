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
};

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

export type TPagesCount = string | number;