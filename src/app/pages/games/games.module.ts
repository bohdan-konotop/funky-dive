import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamesComponent } from './games.component';
import { GamesRoutingModule } from './games-routing.module';
import { MainPageModule } from '@modules/main-page/main-page.module';

@NgModule({
  declarations: [GamesComponent],
  imports: [CommonModule, GamesRoutingModule, MainPageModule],
})
export class GamesModule {}
