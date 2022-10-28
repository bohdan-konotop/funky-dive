import { Injectable } from '@angular/core';
import { Cell } from '../types';
import { SHAPES } from '../figures';

@Injectable({
  providedIn: 'root',
})
export class FigureService {
  constructor() {}

  public randomShape(): Cell[][] {
    const min = 0;
    const max = SHAPES.length;

    const randomIndex = Math.floor(Math.random() * (max - min) + min);

    return SHAPES[randomIndex];
  }
}
