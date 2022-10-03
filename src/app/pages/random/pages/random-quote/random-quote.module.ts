import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RandomQuoteComponent } from './random-quote.component';
import { RandomQuoteRoutingModule } from './random-quote-routing.module';
import { PageModule } from '@modules/page/page.module';
import { CustomBtnModule } from '@modules/custom-btn/custom-btn.module';
import { RandomQuoteService } from '@services/random-quote.service';

@NgModule({
  declarations: [RandomQuoteComponent],
  imports: [
    RandomQuoteRoutingModule,
    PageModule,
    CustomBtnModule,
    CommonModule,
  ],
  providers: [RandomQuoteService],
})
export class RandomQuoteModule {}
