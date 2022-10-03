import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamesComponent } from './games.component';
import { GamesRoutingModule } from './games-routing.module';
import { PageModule } from '@modules/page/page.module';

@NgModule({
  declarations: [GamesComponent],
  imports: [CommonModule, GamesRoutingModule, PageModule],
})
export class GamesModule {}
