import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RandomWordComponent} from "./random-word.component";

const routes: Routes = [
  {
    path: '',
    component: RandomWordComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RandomWordRoutingModule {}
