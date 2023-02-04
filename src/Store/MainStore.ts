import { makeAutoObservable, runInAction } from 'mobx';
import { getEpisodeData, getFilterCharacters, getPages } from '../API/MainAPI';
import ICards, { TSeries } from '../Types/MainTypes';

class MainStore {
  cardsArray: ICards[] = [];
  card: ICards = {} as ICards;
  page: number = JSON.parse(localStorage.getItem('page') || JSON.stringify(1));
  pagesCount: number = 0;
  gender: string = localStorage.getItem('gender') || '';
  status: string = localStorage.getItem('status') || '';
  type: string = 'name';
  name: string = '';
  currentCharacter: string = '';
  content: TSeries[] = [];
  numberOfKey: number = 0;

  constructor() {
    makeAutoObservable(this);
  }

  setCardsArray = (): void => {
    getFilterCharacters({
      type: this.type,
      name: this.name,
      status: this.status,
      gender: this.gender,
      page: this.page,
    }).then((data) => {
      runInAction(() => {
        this.cardsArray = data;
      });
    });
  };

  setCard = (payload: ICards): void => {
    this.card = payload;
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
    localStorage.setItem('page', JSON.stringify(this.page));
  };

  incrementPage = (): void => {
    if (this.page === this.pagesCount) {
      return;
    }
    this.page++;
    localStorage.setItem('page', JSON.stringify(this.page));
  };

  customPage = (payload: number): void => {
    this.page = payload;
    localStorage.setItem('page', JSON.stringify(this.page));
  };

  setGender = (payload: string): void => {
    this.gender = payload;
    localStorage.setItem('gender', payload);
  };

  setStatus = (payload: string): void => {
    this.status = payload;
    localStorage.setItem('status', payload);
  };

  setType = (payload: string): void => {
    this.type = payload;
  };

  setName = (payload: string): void => {
    this.name = payload;
  };

  setCurrentCharacter = (payload: string): void => {
    this.currentCharacter = payload;
  };

  setContent = (): void => {
    this.content = [];
    this.numberOfKey = 0;
  };

  setEpisodeData = async (payload: number): Promise<void> => {
    getEpisodeData({ result: payload }).then((data) => {
      runInAction(() => {
        this.content = [
          ...this.content,
          {
            name: data.name,
            date: data.air_date,
            episode: data.episode,
            key: (++this.numberOfKey).toString(),
          },
        ];
      })
    });
  };
}

export const mainStore = new MainStore();
