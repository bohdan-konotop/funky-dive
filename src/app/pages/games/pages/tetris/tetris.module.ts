import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TetrisComponent } from './tetris.component';
import { MainPageModule } from '@modules/main-page/main-page.module';
import { TetrisRoutingModule } from './tetris-routing.module';
import { BoardComponent } from './components/board/board.component';
import { TetrisService } from './services/tetris.service';

@NgModule({
  declarations: [TetrisComponent, BoardComponent],
  imports: [CommonModule, TetrisRoutingModule, MainPageModule],
  providers: [TetrisService],
})
export class TetrisModule {}
