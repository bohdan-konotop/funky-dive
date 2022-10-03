import { Component, OnInit } from '@angular/core';
import { SudokuService } from '../../services/sudoku.service';
import { ClueService } from '../../services/clue.service';

@Component({
  selector: 'app-sudoku-controls',
  templateUrl: './sudoku-controls.component.html',
  styleUrls: ['./sudoku-controls.component.scss'],
})
export class SudokuControlsComponent implements OnInit {
  public sudokuIsSolved = false;

  public maxCluesReached = false;

  public minCluesReached = false;

  constructor(
    private gameService: SudokuService,
    private clueService: ClueService
  ) {}

  public moreClues = () => {
    this.sudokuIsSolved = false;
    this.gameService.createSudokuWithMoreClues();
  };

  public lessClues = () => {
    this.sudokuIsSolved = false;
    this.gameService.createSudokuWithLessClues();
  };

  public handleNewSudokuRequest(): void {
    this.generateNewSudoku();
  }

  ngOnInit(): void {
    this.gameService.validityObservable().subscribe((validity) => {
      this.sudokuIsSolved = validity;
    });

    this.clueService.lowerLimitReachedObservable.subscribe(
      (val) => (this.minCluesReached = val)
    );
    this.clueService.upperLimitReachedObservable.subscribe(
      (val) => (this.maxCluesReached = val)
    );
  }

  private generateNewSudoku(): void {
    this.gameService.setupNewSudoku();
  }
}
