import { Component, HostListener, Inject, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SnakeService } from '../../services/snake.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-snake-game',
  templateUrl: './snake-game.component.html',
  styleUrls: ['./snake-game.component.scss'],
})
export class SnakeGameComponent implements OnInit {
  @Input() boardSize = 20;
  @Input() keyUp = 'ArrowUp';
  @Input() keyDown = 'ArrowDown';
  @Input() keyLeft = 'ArrowLeft';
  @Input() keyRight = 'ArrowRight';
  @Input() keyPause = ' ';
  @Input() keyRestart = 'Escape';

  public score = 0;
  public snake: number[][] = [];
  public foods: number[][] = [];
  public paused = false;
  public gameOver = false;

  private direction: string = '';
  private tick?: number;
  private currentLevel = 1;
  private maxLevel = 10;
  private foodSubscription!: Subscription;
  private collisionSubscription!: Subscription;

  constructor(
    private snakeService: SnakeService,
    @Inject(DOCUMENT) private _doc: Document
  ) {}

  private get window(): Window {
    return this._doc.defaultView || window;
  }

  @HostListener('window:keydown', ['$event'])
  public handleKeyDown(event: KeyboardEvent): boolean {
    switch (event.key) {
      case this.keyUp:
      case this.keyDown:
      case this.keyLeft:
      case this.keyRight:
        if (this.validMove(event.key)) {
          this.direction = event.key;
        }
        return false;
      case this.keyPause:
        this.pauseTick(!this.paused);
        return false;
      case this.keyRestart:
        this.restart();
        return false;
    }
    return true;
  }

  ngOnInit(): void {
    this.foodSubscription = this.snakeService.foodTaken$.subscribe(() => {
      this.score++;
      if (this.score >= this.currentLevel * 10) {
        this.currentLevel++;
        this.increaseSpeed();
      }
      this.foods = this.snakeService.copyFoods();
    });
    this.collisionSubscription = this.snakeService.collision$.subscribe(() => {
      this.gameOver = true;
      this.stopTick();
    });
  }

  ngOnDestroy(): void {
    this.foodSubscription.unsubscribe();
    this.collisionSubscription.unsubscribe();
    this.stopTick();
  }

  public startTick(): void {
    if (this.tick !== undefined) return;

    const speed = Math.max(1, this.maxLevel - this.currentLevel) * 20;
    this.tick = this.window.setInterval(() => {
      switch (this.direction) {
        case this.keyUp:
          this.snakeService.moveUp();
          break;
        case this.keyDown:
          this.snakeService.moveDown();
          break;
        case this.keyLeft:
          this.snakeService.moveLeft();
          break;
        case this.keyRight:
          this.snakeService.moveRight();
          break;
      }
      this.snake = this.snakeService.copySnake();
    }, speed);
  }

  public stopTick(): void {
    clearInterval(this.tick);
    this.tick = undefined;
  }

  public pauseTick(pause: boolean): void {
    this.paused = pause;
    this.paused ? this.stopTick() : this.startTick();
  }

  public increaseSpeed(): void {
    this.stopTick();
    this.startTick();
  }

  public restart(): void {
    this.stopTick();
    this.currentLevel = 1;
    this.direction = this.keyRight;
    this.paused = false;
    this.gameOver = false;
    this.score = 0;
    this.snakeService.restart(this.boardSize, 4);
    this.snake = this.snakeService.copySnake();
    this.foods = this.snakeService.copyFoods();
    this.startTick();
  }

  public validMove(direction: string): boolean {
    if (this.gameOver || this.paused || direction === this.direction)
      return false;

    // The snake can't go backwards
    switch (this.direction) {
      case this.keyUp:
        return direction !== this.keyDown;
      case this.keyDown:
        return direction !== this.keyUp;
      case this.keyLeft:
        return direction !== this.keyRight;
      case this.keyRight:
        return direction !== this.keyLeft;
      default:
        return true;
    }
  }
}
