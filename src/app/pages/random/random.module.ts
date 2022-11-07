import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RandomComponent } from './random.component';
import { RandomRoutingModule } from './random-routing.module';
import { MainPageModule } from '@modules/main-page/main-page.module';

@NgModule({
  declarations: [RandomComponent],
  imports: [CommonModule, RandomRoutingModule, MainPageModule],
})
export class RandomModule {}
