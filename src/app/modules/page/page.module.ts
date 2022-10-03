import { NgModule } from '@angular/core';
import { PageComponent } from './page.component';
import { HeaderModule } from '../header/header.module';
import { NavbarModule } from '../navbar/navbar.module';

@NgModule({
  declarations: [PageComponent],
  exports: [PageComponent],
  imports: [HeaderModule, NavbarModule],
})
export class PageModule {}
