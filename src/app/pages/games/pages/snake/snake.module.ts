import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SnakeComponent } from './snake.component';
import { MainPageModule } from '@modules/main-page/main-page.module';
import { SnakeRoutingModule } from './snake-routing.module';
import { GameMenuComponent } from './components/game-menu/game-menu.component';
import { GameScoreComponent } from './components/game-score/game-score.component';
import { SnakeGameComponent } from './components/snake-game/snake-game.component';
import { SnakeBoardComponent } from './components/snake-board/snake-board.component';
import { CustomBtnModule } from '@modules/custom-btn/custom-btn.module';
import { SnakeService } from './services/snake.service';
import { UtilsService } from './services/utils.service';

@NgModule({
  declarations: [
    SnakeComponent,
    GameMenuComponent,
    GameScoreComponent,
    SnakeGameComponent,
    SnakeBoardComponent,
  ],
  imports: [SnakeRoutingModule, CommonModule, MainPageModule, CustomBtnModule],
  providers: [SnakeService, UtilsService],
})
export class SnakeModule {}
