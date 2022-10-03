import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomBtnComponent } from './custom-btn.component';
import { BtnIconComponent } from './btn-icon/btn-icon.component';

@NgModule({
  declarations: [CustomBtnComponent, BtnIconComponent],
  exports: [CustomBtnComponent, BtnIconComponent],
  imports: [CommonModule],
})
export class CustomBtnModule {}
