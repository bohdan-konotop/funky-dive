import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RandomWordComponent } from './random-word.component';
import { RandomWordRoutingModule } from './random-word-routing.module';
import { MainPageModule } from '@modules/main-page/main-page.module';
import { CustomBtnModule } from '@modules/custom-btn/custom-btn.module';
import { RandomWordService } from '@services/random-word.service';

@NgModule({
  declarations: [RandomWordComponent],
  imports: [
    RandomWordRoutingModule,
    MainPageModule,
    CustomBtnModule,
    CommonModule,
  ],
  providers: [RandomWordService],
})
export class RandomWordModule {}
