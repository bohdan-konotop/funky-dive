import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TwentyFortyEightComponent } from './twenty-forty-eight.component';
import { GameService } from './game.service';

const routes: Routes = [
  {
    path: '',
    component: TwentyFortyEightComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [GameService],
})
export class TwentyFortyEightRoutingModule {}
