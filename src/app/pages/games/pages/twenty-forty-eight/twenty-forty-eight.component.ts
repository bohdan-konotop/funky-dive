import { Component, HostListener } from '@angular/core';
import { GameService } from './game.service';
import { Item } from './item';

const colorMap: { [k: number]: string } = {
  2: '#626567',
  4: '#424949',
  8: '#7E5109',
  16: '#196F3D',
  32: '#138D75',
  64: '#154360',
  128: '#9B59B6',
  256: '#78281F',
  512: '#C0392B',
  1024: '#7D6608',
  2048: '#45B39D',
};

type directions = 'up' | 'down' | 'left' | 'right';

@Component({
  selector: 'app-twenty-forty-eight',
  templateUrl: './twenty-forty-eight.component.html',
  styleUrls: ['./twenty-forty-eight.component.scss'],
})
export class TwentyFortyEightComponent {
  keyEventCodeMap: { [type: string]: directions } = {
    ArrowUp: 'up',
    ArrowDown: 'down',
    ArrowLeft: 'left',
    ArrowRight: 'right',
  };

  constructor(public gameService: GameService) {}

  getStyles(item: Item): { [p: string]: string } {
    const top = item.row * 110 - 100 + 'px';
    const left = item.col * 110 - 100 + 'px';
    return {
      top,
      left,
      'background-color': colorMap[item.value] || 'black',
    };
  }

  @HostListener('window:keyup', ['$event'])
  onKeyUp(event: KeyboardEvent) {
    const move: directions = this.keyEventCodeMap[event.code];

    if (move) {
      this.gameService[move]();
    }
  }
}
