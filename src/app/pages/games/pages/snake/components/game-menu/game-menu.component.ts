import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-game-menu',
  templateUrl: './game-menu.component.html',
  styleUrls: ['./game-menu.component.scss'],
})
export class GameMenuComponent {
  @Input() paused = false;
  @Input() gameOver = false;

  @Output() pauseEvent = new EventEmitter<boolean>();
  @Output() newGameEvent = new EventEmitter<boolean>();

  public action(): void {
    if (this.gameOver) this.newGameEvent.emit(true);
    else this.pauseEvent.emit(!this.paused);
  }

  public getBtnText(): string {
    if (!this.gameOver) return this.paused ? 'Continue' : 'Pause';
    return 'New Game';
  }
}
