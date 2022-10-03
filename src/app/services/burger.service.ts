import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BurgerService {
  public isOpen = false;

  public change() {
    this.isOpen = !this.isOpen;
  }

  public close() {
    this.isOpen = false;
  }

  public open() {
    this.isOpen = true;
  }
}
