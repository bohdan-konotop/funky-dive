import { Cell } from './types';

export const I_SHAPE: Cell[][] = [[true, true, true, true]];

export const J_SHAPE: Cell[][] = [
  [undefined, true],
  [undefined, true],
  [true, true],
];

export const L_SHAPE: Cell[][] = [
  [true, undefined],
  [true, undefined],
  [true, true],
];

export const O_SHAPE: Cell[][] = [
  [true, true],
  [true, true],
];

export const Z_SHAPE: Cell[][] = [
  [true, true, undefined],
  [undefined, true, true],
];

export const T_SHAPE: Cell[][] = [
  [undefined, true, undefined],
  [true, true, true],
];

export const S_SHAPE: Cell[][] = [
  [undefined, true, true],
  [true, true, undefined],
];

export const SHAPES = [
  I_SHAPE,
  J_SHAPE,
  L_SHAPE,
  O_SHAPE,
  Z_SHAPE,
  T_SHAPE,
  S_SHAPE,
];
