import { Component, OnDestroy, OnInit } from '@angular/core';
import { RandomQuoteService } from '@services/random-quote.service';
import { Quote } from '@interfaces';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-random-word',
  templateUrl: './random-quote.component.html',
  styleUrls: ['./random-quote.component.scss'],
})
export class RandomQuoteComponent implements OnDestroy, OnInit {
  public quote: Quote | null = null;
  public message = 'click randomize button';

  public loading = false;

  private quotes: null | Quote[] = null;
  private quotesLength = 0;

  private destroy$ = new Subject();

  constructor(private randomQuote: RandomQuoteService) {}

  public randomize(): void {
    this.loading = true;

    setTimeout(() => {
      this.loading = false;

      if (this.quotes === null) return;
      this.quote = this.quotes[this.getRandomArbitrary(0, this.quotesLength)];
    }, 200);
  }

  ngOnInit(): void {
    this.loading = true;
    this.randomQuote
      .getQuote()
      .pipe(takeUntil(this.destroy$))
      .subscribe((quotes) => {
        this.quotes = quotes;
        this.quotesLength = quotes.length;
        this.loading = false;
      });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  private getRandomArbitrary(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }
}
