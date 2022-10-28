import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GamesComponent } from './games.component';

const routes: Routes = [
  {
    path: '',
    component: GamesComponent,
  },
  {
    path: 'sudoku',
    loadChildren: () =>
      import('./pages/sudoku/sudoku.module').then((m) => m.SudokuModule),
  },
  {
    path: 'snake',
    loadChildren: () =>
      import('./pages/snake/snake.module').then((m) => m.SnakeModule),
  },
  {
    path: '2048',
    loadChildren: () =>
      import('./pages/twenty-forty-eight/twenty-forty-eight.module').then(
        (m) => m.TwentyFortyEightModule
      ),
  },
  {
    path: 'tetris',
    loadChildren: () =>
      import('./pages/tetris/tetris.module').then((m) => m.TetrisModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GamesRoutingModule {}
