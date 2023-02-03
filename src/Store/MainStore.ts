import { makeAutoObservable, runInAction } from 'mobx';
import { getFilterCharacters, getPages } from '../API/MainAPI';
import ICards from '../Types/MainTypes';

class MainStore {
  cards: ICards[] = [];
  page: number = 1;
  pagesCount: number = 15;

  constructor() {
    makeAutoObservable(this);
  }

  setCards = (): void => {
    getFilterCharacters({
      type: '',
      name: '',
      status: '',
      gender: '',
      page: 1,
    }).then((data) => {
      runInAction(() => {
        this.cards = data;
      });
    });
  };

  setPagesCount = (): void => {
    getPages({
      type: '',
      name: '',
      status: '',
      gender: '',
    }).then((data) => {
      runInAction(() => {
        this.pagesCount = data;
      });
    });
  };

  decrementPage = (): void => {
    if (this.page === 1) {
      return;
    }
    this.page--;
    console.log(this.page);
  };

  incrementPage = (): void => {
    if (this.page === this.pagesCount) {
      return;
    }
    this.page++;
    console.log(this.page);
  };

  customPage = (payload: number): void => {
    this.page = payload;
    console.log(this.page);
  };
}

export const mainStore = new MainStore();
