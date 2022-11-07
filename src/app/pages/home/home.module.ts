import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './home.component';
import { MainPageModule } from '@modules/main-page/main-page.module';
import { CustomBtnModule } from '@modules/custom-btn/custom-btn.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [HomeRoutingModule, CommonModule, MainPageModule, CustomBtnModule],
})
export class HomeModule {}
