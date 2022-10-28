import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TwentyFortyEightComponent } from './twenty-forty-eight.component';
import { MainPageModule } from '@modules/main-page/main-page.module';
import { TwentyFortyEightRoutingModule } from './twenty-forty-eight-routing.module';
import { CustomBtnModule } from '@modules/custom-btn/custom-btn.module';

@NgModule({
  declarations: [TwentyFortyEightComponent],
  imports: [
    CommonModule,
    TwentyFortyEightRoutingModule,
    MainPageModule,
    CustomBtnModule,
  ],
})
export class TwentyFortyEightModule {}
