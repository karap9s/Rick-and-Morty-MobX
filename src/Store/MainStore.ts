import { makeAutoObservable, runInAction } from 'mobx';
import { getFilterCharacters } from '../API/MainAPI';
import ICards, { TPagesCount } from '../Types/MainTypes';

class MainStore {
  cards: ICards[] = [];
  page: number = 1;
  pagesCount: TPagesCount[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  setCards = () => {
    getFilterCharacters({
      type: '',
      name: '',
      status: '',
      gender: '',
      page: 1,
    }).then((data) => {
      console.log(data);
      runInAction(() => {
        this.cards = data;
      });
    });
  };
}

export const mainStore = new MainStore();
