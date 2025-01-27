import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TetrisComponent } from './tetris.component';

const routes: Routes = [
  {
    path: '',
    component: TetrisComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TetrisRoutingModule {}
