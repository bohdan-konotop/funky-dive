import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-game-score',
  templateUrl: './game-score.component.html',
  styleUrls: ['./game-score.component.scss'],
})
export class GameScoreComponent {
  @Input() score = 0;
}
