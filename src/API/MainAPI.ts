import { TEpisodes, TGetPages, TSeries } from '../Types/MainTypes';

const BASE_URL = 'https://rickandmortyapi.com/api';
const character = `${BASE_URL}/character`;
const episode = `${BASE_URL}/episode`;

export const getFilterCharacters = async (arg: TGetPages) => {
  const res = await fetch(
    `${character}/?page=${arg.page}&${arg.type}=${arg.name}&status=${arg.status}&gender=${arg.gender}`
  );
  const data = await res.json();
  return data.results;
};

export const getPages = async (arg: TGetPages) => {
  const res = await fetch(
    `${character}/?${arg.type}=${arg.name}&status=${arg.status}&gender=${arg.gender}`
  );
  const data = await res.json();
  return data.info.pages;
};

export const getEpisodeData = async (arg: { result: number }): Promise<TEpisodes> => {
  const res = await fetch(`${episode}/${arg.result}`);
  const data = await res.json();
  return data;
};
