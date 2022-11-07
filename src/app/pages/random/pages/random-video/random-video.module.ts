import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RandomVideoComponent } from './random-video.component';
import { RandomVideoRoutingModule } from './random-video-routing.module';
import { MainPageModule } from '@modules/main-page/main-page.module';
import { CustomBtnModule } from '@modules/custom-btn/custom-btn.module';
import { SafePipe } from '../../../../pipes/safe.pipe';

@NgModule({
  declarations: [RandomVideoComponent, SafePipe],
  imports: [
    RandomVideoRoutingModule,
    MainPageModule,
    CustomBtnModule,
    CommonModule,
  ],
})
export class RandomVideoModule {}
