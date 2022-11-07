import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomBtnModule } from '@modules/custom-btn/custom-btn.module';
import { RouterModule } from '@angular/router';

import { MainPageComponent } from './main-page.component';
import { HeaderComponent } from '@modules/main-page/header/header.component';
import { NavbarComponent } from '@modules/main-page/navbar/navbar.component';
import { BurgerService } from '@services/burger.service';

@NgModule({
  declarations: [MainPageComponent, HeaderComponent, NavbarComponent],
  exports: [MainPageComponent],
  imports: [CommonModule, RouterModule, CustomBtnModule],
  providers: [BurgerService],
})
export class MainPageModule {}
