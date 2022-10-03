import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { CellIndices, Sudoku } from '../../types';
import { SudokuService } from '../../services/sudoku.service';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-sudoku-board',
  templateUrl: './sudoku-board.component.html',
  styleUrls: ['./sudoku-board.component.scss'],
})
export class SudokuBoardComponent implements OnInit {
  public sudoku!: Sudoku;

  constructor(
    private gameService: SudokuService,
    private navigationService: NavigationService
  ) {}

  @ViewChildren('cell')
  set cells(value: QueryList<any>) {
    setTimeout(() => (this.navigationService.cells = value));
  }

  public handleNavigation = (e: KeyboardEvent) =>
    this.navigationService.handleNavigation(e);

  public updateFocusedCell = (newIndices: CellIndices) =>
    this.navigationService.updateFocusedCell(newIndices);

  ngOnInit(): void {
    this.gameService.initSudoku();

    this.gameService.startingSudokuObservable().subscribe((startingSudoku) => {
      this.sudoku = startingSudoku;
    });

    this.gameService.validityObservable().subscribe((validity) => {
      if (validity) {
        this.handleSudokuCompletion();
      }
    });
  }

  private handleSudokuCompletion() {
    this.disableInput();
  }

  private disableInput(): void {
    this.navigationService.cells
      .toArray()
      .forEach((cell) => cell.disableCell());
  }
}
