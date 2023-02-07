import { makeAutoObservable } from "mobx";
import { IFormCards } from "../Types/FormTypes";

class FormStore {
  storage: IFormCards[] = JSON.parse(
    localStorage.getItem('formStorage') || JSON.stringify([] as IFormCards[])
  );

  constructor() {
    makeAutoObservable(this);
  }

  setStorage = (payload: IFormCards): void => {
    this.storage.push(payload);
  }

  resetStorage = (): void => {
    this.storage = [];
  }
}

export const formStore = new FormStore();
