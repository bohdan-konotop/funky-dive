import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './home.component';
import { HeaderModule } from '@modules/header/header.module';
import { NavbarModule } from '@modules/navbar/navbar.module';
import { PageModule } from '@modules/page/page.module';
import { CustomBtnModule } from '@modules/custom-btn/custom-btn.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    HomeRoutingModule,
    CommonModule,
    HeaderModule,
    NavbarModule,
    PageModule,
    CustomBtnModule,
  ],
})
export class HomeModule {}
