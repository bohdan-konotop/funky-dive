import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cell } from '../types';
import { FigureService } from './figure.service';

interface FigureLocation {
  rowIndex: null | number;
  cellIndex: null | number;
}

@Injectable({
  providedIn: 'root',
})
export class TetrisService {
  private matrixHeight = 21;
  private matrixWidth = 10;

  private tetrisField = new BehaviorSubject<Cell[][]>(this.createMatrix());
  public tetrisField$ = this.tetrisField.asObservable();

  constructor(private figures: FigureService) {}

  public get field(): Cell[][] {
    return [...this.tetrisField.value];
  }

  public spawnShape(): void {
    const figure = this.figures.randomShape();
    const figureCenter = Math.ceil(figure[0].length / 2);

    const field = this.field;
    const matrixCenter = Math.floor(this.matrixWidth / 2);

    figure.forEach((_, i) => {
      const figureRow = figure[i];

      figureRow.forEach((_, j) => {
        field[i][matrixCenter - figureCenter + j] = figure[i][j];
      });
    });

    this.tetrisField.next(field);
  }

  public rotate(): void {
    let field = this.field;

    const location = this.findShapeStartLocation(field);

    const shape = this.findShape(field);

    field = this.removeShapeFromField(field, shape, location);

    const rotatedShape = shape[0].map((_, i) =>
      shape.map((row) => row[i]).reverse()
    );

    field = this.putShapeOnField(field, rotatedShape, location);

    this.tetrisField.next(field);
  }

  public moveDown(): void {
    let field = this.field;

    for (let i = field.length - 1; i >= 0; i--) {
      const row = field[i];
      const nextIndex = i + 1;

      if (!row.includes(true)) continue;

      if (i === field.length - 1 && row.includes(true)) {
        field = this.nullifying(field);
        this.spawnShape();
        break;
      }

      if (nextIndex === field.length) break;

      row.forEach((cell) => {
        if (cell === false) return;

        const shapeCellIndex = field[i].findIndex(
          (cell) => cell || cell === undefined
        );

        if (shapeCellIndex < 0) return;

        const nextRow = field[i + 1];

        if (
          nextRow[shapeCellIndex] === null &&
          row[shapeCellIndex] !== undefined
        ) {
          field = this.nullifying(field);
          this.spawnShape();
        } else {
          if (
            nextRow[shapeCellIndex] === null &&
            row[shapeCellIndex] === undefined
          ) {
            nextRow[shapeCellIndex] = null;
            row[shapeCellIndex] = false;
          } else {
            nextRow[shapeCellIndex] = row[shapeCellIndex];
            row[shapeCellIndex] = false;
          }
        }
      });
    }

    this.tetrisField.next(field);
  }

  public moveLeft(): void {
    const field = this.field;

    this.moveLeftLogic(field);

    this.tetrisField.next(field);
  }

  public moveRight(): void {
    const reverseRowWithShape = (row: Cell[]): Cell[] => {
      if (!row.includes(true)) return row;

      return row.reverse();
    };

    const field = this.field.map(reverseRowWithShape);

    this.moveLeftLogic(field);

    field.map(reverseRowWithShape);

    this.tetrisField.next(field);
  }

  private createMatrix(): Cell[][] {
    return Array(this.matrixHeight)
      .fill(false)
      .map(() => Array(this.matrixWidth).fill(false));
  }

  private moveLeftLogic(field: Cell[][]): void {
    field.forEach((row) => {
      if (!row.includes(true)) return;

      const checked: number[] = [];

      row.forEach((cell) => {
        if (cell === false) return;

        const shapeCellIndex = row.findIndex(
          (cell, i) => (cell || cell === undefined) && !checked.includes(i)
        );

        if (!~shapeCellIndex || shapeCellIndex === 0) return;

        checked.push(shapeCellIndex - 1);
        row[shapeCellIndex - 1] = row[shapeCellIndex];
        row[shapeCellIndex] = false;
      });
    });
  }

  private nullifying(field: Cell[][]): Cell[][] {
    return field.map((row) => {
      if (!row.includes(true)) return row;
      return row.map((cell) => {
        if (cell === undefined) return false;
        else if (cell === true) return null;
        return cell;
      });
    });
  }

  private findShape(field: Cell[][]): Cell[][] {
    return field
      .filter((row) => {
        return row.some((cell) => cell);
      })
      .map((row) =>
        row.filter((cell) => {
          return cell || cell === undefined;
        })
      );
  }

  private findShapeStartLocation(field: Cell[][]): FigureLocation {
    const location: FigureLocation = {
      rowIndex: null,
      cellIndex: null,
    };

    field.forEach((row, i) => {
      if (row.some((cell) => cell && location.rowIndex === null))
        location.rowIndex = i;

      row.forEach((cell, j) => {
        if ((cell || cell === undefined) && location.cellIndex === null)
          location.cellIndex = j;
      });
    });

    return location;
  }

  private removeShapeFromField(
    field: Cell[][],
    shape: Cell[][],
    location: FigureLocation
  ): Cell[][] {
    for (let i = 0; i < shape.length; i++) {
      for (let j = 0; j < shape[0].length; j++) {
        const rowIndex = location.rowIndex || 0;
        const cellIndex = location.cellIndex || 0;

        field[rowIndex + i][cellIndex + j] = false;
      }
    }

    return field;
  }

  private putShapeOnField(
    field: Cell[][],
    shape: Cell[][],
    location: FigureLocation
  ): Cell[][] {
    for (let i = 0; i < shape.length; i++) {
      const rowIndex = location.rowIndex || 0;
      let cellIndex = location.cellIndex || 0;

      for (let j = 0; j < shape[0].length; j++) {
        if (cellIndex + shape[0].length > field[0].length)
          cellIndex -= cellIndex + shape[0].length - field[0].length;

        field[rowIndex + i][cellIndex + j] = shape[i][j];
      }
    }
    return field;
  }
}
