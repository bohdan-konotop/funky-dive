import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { TetrisService } from '../../services/tetris.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit, OnDestroy {
  public keyFunctions: { [type: string]: () => void } = {
    ArrowUp: () => this.tetris.rotate(),
    ArrowDown: () => this.tetris.moveDown(),
    ArrowLeft: () => this.tetris.moveLeft(),
    ArrowRight: () => this.tetris.moveRight(),
  };
  private destroy$ = new Subject();

  public tetrisField = this.tetris.tetrisField$.pipe(takeUntil(this.destroy$));

  constructor(private tetris: TetrisService) {}

  ngOnInit(): void {
    this.tetris.tetrisField$.subscribe(console.log);
    this.tetris.spawnShape();
  }

  ngOnDestroy() {
    this.destroy$.next(false);
    this.destroy$.complete();
  }

  @HostListener('window:keydown', ['$event'])
  public handleKeydown(event: KeyboardEvent) {
    event.preventDefault();

    if (!this.keyFunctions?.[event?.code]) return;

    this.keyFunctions?.[event.code]();
  }
}
