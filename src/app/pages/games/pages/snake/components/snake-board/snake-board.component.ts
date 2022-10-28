import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-snake-board',
  templateUrl: './snake-board.component.html',
  styleUrls: ['./snake-board.component.scss'],
})
export class SnakeBoardComponent {
  @Input() boardSize: number = 20;
  @Input() snake: number[][] = [];
  @Input() foods: number[][] = [];

  public applyTilePositionStyle(position: number[]): {
    left: string;
    top: string;
  } {
    return {
      left: `calc(var(--tile-size) * ${position[0]})`,
      top: `calc(var(--tile-size) * ${position[1]})`,
    };
  }
}
