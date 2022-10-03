import { NgModule } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { HeaderComponent } from './header.component';
import { RouterModule } from '@angular/router';
import { CustomBtnModule } from '@modules/custom-btn/custom-btn.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, RouterModule, CustomBtnModule],
  exports: [HeaderComponent],
  providers: [Location],
})
export class HeaderModule {}
