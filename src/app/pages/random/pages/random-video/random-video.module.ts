import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RandomVideoComponent } from './random-video.component';
import { RandomVideoRoutingModule } from './random-video-routing.module';
import { PageModule } from '@modules/page/page.module';
import { CustomBtnModule } from '@modules/custom-btn/custom-btn.module';
import { SafePipe } from '../../../../pipes/safe.pipe';

@NgModule({
  declarations: [RandomVideoComponent, SafePipe],
  imports: [
    RandomVideoRoutingModule,
    PageModule,
    CustomBtnModule,
    CommonModule,
  ],
})
export class RandomVideoModule {}
