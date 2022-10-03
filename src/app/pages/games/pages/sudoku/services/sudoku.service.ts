import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { generateSudoku, validateSudoku } from 'sudoku-logic';
import { Cell, Sudoku } from '../types';
import { ClueService } from './clue.service';

@Injectable({
  providedIn: 'root',
})
export class SudokuService {
  private numberOfCellsToRemove = 31;
  private startingSudoku = generateSudoku(this.numberOfCellsToRemove);
  private sudoku = new BehaviorSubject<Sudoku>(
    JSON.parse(JSON.stringify(this.startingSudoku))
  );
  private startingSudokuSubject = new BehaviorSubject<Sudoku>(
    this.startingSudoku
  );
  private isValid = new BehaviorSubject<boolean>(false);

  constructor(private clueService: ClueService) {
    this.sudoku.asObservable().subscribe(this.validityObserver);
    this.clueService.cellsToRemoveObservable.subscribe(
      (val) => (this.numberOfCellsToRemove = val)
    );
  }

  public validityObservable = () => this.isValid.asObservable();

  public startingSudokuObservable = () =>
    this.startingSudokuSubject.asObservable();

  public sudokuObservable = () => this.sudoku.asObservable();

  public updateCell = (row: number, col: number, inputValue: string) => {
    const updatedSudoku = this.sudoku.value;

    updatedSudoku[row][col] = this.convertInputValue(inputValue);

    this.sudoku.next(updatedSudoku);
  };

  public initSudoku = () => {
    this.setupNewSudoku();
  };

  public createSudokuWithMoreClues() {
    this.clueService.decrementCellsToRemove();
    this.setupNewSudoku();
  }

  public createSudokuWithLessClues() {
    this.clueService.incrementCellsToRemove();
    this.setupNewSudoku();
  }

  public setupNewSudoku() {
    this.startingSudoku = generateSudoku(this.numberOfCellsToRemove);
    this.startingSudokuSubject.next(this.startingSudoku);
    this.sudoku.next(JSON.parse(JSON.stringify(this.startingSudoku)));
    this.isValid.next(false);
  }

  private sudokuIsFilled = (sudoku: Sudoku) =>
    sudoku.flat().filter((cell) => cell == null).length === 0;

  private checkSudokuValidity = (sudoku: Sudoku) => validateSudoku(sudoku);

  private handleValidSudoku = () => {
    this.isValid.next(true);
  };

  private validityObserver = {
    next: (sudoku: Sudoku) => {
      if (this.sudokuIsFilled(sudoku) && this.checkSudokuValidity(sudoku)) {
        this.handleValidSudoku();
      }
    },
  };

  private convertInputValue = (input: string): Cell =>
    input === '' ? null : Number(input);
}
