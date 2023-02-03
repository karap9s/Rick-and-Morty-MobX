import { makeAutoObservable, runInAction } from 'mobx';
import { getFilterCharacters, getPages } from '../API/MainAPI';
import ICards from '../Types/MainTypes';

class MainStore {
  cards: ICards[] = [];
  page: number = 1;
  pagesCount: number = 0;

  constructor() {
    makeAutoObservable(this);
  }

  setCards = (): void => {
    getFilterCharacters({
      type: '',
      name: '',
      status: '',
      gender: '',
      page: this.page,
    }).then((data) => {
      runInAction(() => {
        this.cards = data;
      });
    });
  };

  setPagesCount = (): Promise<void> => {
    return getPages({
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
  };

  incrementPage = (): void => {
    if (this.page === this.pagesCount) {
      return;
    }
    this.page++;
  };

  customPage = (payload: number): void => {
    this.page = payload;
  };
}

export const mainStore = new MainStore();
