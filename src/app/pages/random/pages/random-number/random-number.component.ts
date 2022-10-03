import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-random-number',
  templateUrl: './random-number.component.html',
  styleUrls: ['./random-number.component.scss'],
})
export class RandomNumberComponent {
  public loading = false;
  public from = new FormControl('0');
  public to = new FormControl('1');

  public result: number | null = null;

  public randomize(): void {
    this.loading = true;

    const from = this.from.value;
    const to = this.to.value;

    if (from === null || to === null) return;

    const min = Math.ceil(+from);
    const max = Math.floor(+to);

    setTimeout(() => {
      this.loading = false;
      this.result = Math.floor(Math.random() * (max - min + 1) + min);
    }, 200);
  }
}
