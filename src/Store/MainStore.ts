import { makeAutoObservable, runInAction } from 'mobx';
import { getFilterCharacters, getPages } from '../API/MainAPI';
import ICards from '../Types/MainTypes';

class MainStore {
  cards: ICards[] = [];
  page: number = 1;
  pagesCount: number = 0;
  gender: string = localStorage.getItem('gender') || '';
  status: string = localStorage.getItem('status') || '';

  constructor() {
    makeAutoObservable(this);
  }

  setCards = (): void => {
    getFilterCharacters({
      type: '',
      name: '',
      status: this.status,
      gender: this.gender,
      page: this.page,
    }).then((data) => {
      runInAction(() => {
        this.cards = data;
      });
    });
  };

  setPagesCount = async (): Promise<void> => {
    return getPages({
      type: '',
      name: '',
      status: this.status,
      gender: this.gender,
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

  setGender = (payload: string): void => {
    this.gender = payload;
    localStorage.setItem('gender', payload);
  };

  setStatus = (payload: string): void => {
    this.status = payload;
    localStorage.setItem('status', payload);
  };
}

export const mainStore = new MainStore();
