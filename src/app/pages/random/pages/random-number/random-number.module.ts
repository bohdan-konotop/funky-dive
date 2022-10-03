import { NgModule } from '@angular/core';

import { RandomNumberComponent } from './random-number.component';
import { RandomNumberRoutingModule } from './random-number-routing.module';
import { CustomInputModule } from '@modules/custom-input/custom-input.module';
import { ReactiveFormsModule } from '@angular/forms';
import { PageModule } from '@modules/page/page.module';
import { CommonModule } from '@angular/common';
import { CustomBtnModule } from '@modules/custom-btn/custom-btn.module';

@NgModule({
  declarations: [RandomNumberComponent],
  imports: [
    RandomNumberRoutingModule,
    CustomInputModule,
    ReactiveFormsModule,
    PageModule,
    CommonModule,
    CustomBtnModule,
  ],
})
export class RandomNumberModule {}
