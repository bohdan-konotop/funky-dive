import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RandomVideoComponent } from './random-video.component';

const routes: Routes = [
  {
    path: '',
    component: RandomVideoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RandomVideoRoutingModule {}
