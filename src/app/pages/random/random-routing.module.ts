import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RandomComponent } from './random.component';

const routes: Routes = [
  {
    path: '',
    component: RandomComponent,
  },
  {
    path: 'number',
    loadChildren: () =>
      import('./pages/random-number/random-number.module').then(
        (m) => m.RandomNumberModule
      ),
  },
  {
    path: 'word',
    loadChildren: () =>
      import('./pages/random-word/random-word.module').then(
        (m) => m.RandomWordModule
      ),
  },
  {
    path: 'quote',
    loadChildren: () =>
      import('./pages/random-quote/random-quote.module').then(
        (m) => m.RandomQuoteModule
      ),
  },
  {
    path: 'video',
    loadChildren: () =>
      import('./pages/random-video/random-video.module').then(
        (m) => m.RandomVideoModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RandomRoutingModule {}
