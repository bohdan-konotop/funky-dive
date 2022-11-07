import { NgModule } from '@angular/core';

import { SudokuComponent } from './sudoku.component';
import { SudokuRoutingModule } from './sudoku-routing.module';
import { MainPageModule } from '@modules/main-page/main-page.module';
import { CommonModule } from '@angular/common';
import { CustomBtnModule } from '@modules/custom-btn/custom-btn.module';
import { SudokuCellComponent } from './components/sudoku-cell/sudoku-cell.component';
import { SudokuBoardComponent } from './components/sudoku-board/sudoku-board.component';
import { SudokuControlsComponent } from './components/sudoku-controls/sudoku-controls.component';
import { SudokuService } from './services/sudoku.service';
import { ClueService } from './services/clue.service';
import { NavigationService } from './services/navigation.service';

@NgModule({
  declarations: [
    SudokuComponent,
    SudokuCellComponent,
    SudokuBoardComponent,
    SudokuControlsComponent,
  ],
  imports: [SudokuRoutingModule, MainPageModule, CommonModule, CustomBtnModule],
  providers: [SudokuService, ClueService, NavigationService],
})
export class SudokuModule {}
