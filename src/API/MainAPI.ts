import ICards, { TEpisodes, TGetPages } from '../Types/MainTypes';

const BASE_URL = 'https://rickandmortyapi.com/api';
const character = `${BASE_URL}/character`;
const episode = `${BASE_URL}/episode`;

export const getFilterCharacters = async (
  arg: TGetPages
): Promise<ICards[]> => {
  try {
    const res = await fetch(
      `${character}/?page=${arg.page}&${arg.type}=${arg.name}&status=${arg.status}&gender=${arg.gender}`
    );
    const data = await res.json();
    return data.results;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getPages = async (arg: TGetPages): Promise<number> => {
  try {
    const res = await fetch(
      `${character}/?${arg.type}=${arg.name}&status=${arg.status}&gender=${arg.gender}`
    );
    const data = await res.json();
    return data.info.pages;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getEpisodeData = async (arg: {
  result: number;
}): Promise<TEpisodes> => {
  try {
    const res = await fetch(`${episode}/${arg.result}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
