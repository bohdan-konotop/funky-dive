import { Component, OnDestroy } from '@angular/core';
import { RandomWordService } from '@services/random-word.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-random-word',
  templateUrl: './random-word.component.html',
  styleUrls: ['./random-word.component.scss'],
})
export class RandomWordComponent implements OnDestroy {
  public word: string | null = null;
  public message = 'click randomize button';

  public loading = false;

  private destroy$ = new Subject();

  constructor(private randomWord: RandomWordService) {}

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  public randomize() {
    this.loading = true;

    this.randomWord
      .getWord()
      .pipe(takeUntil(this.destroy$))
      .subscribe((word) => {
        this.word = word[0];
        this.loading = false;
      });
  }
}
