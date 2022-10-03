import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RandomNumberComponent} from "./random-number.component";

const routes: Routes = [
  {
    path: '',
    component: RandomNumberComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RandomNumberRoutingModule {}
