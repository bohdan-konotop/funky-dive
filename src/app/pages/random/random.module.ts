import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RandomComponent } from './random.component';
import { RandomRoutingModule } from './random-routing.module';
import { PageModule } from '@modules/page/page.module';

@NgModule({
  declarations: [RandomComponent],
  imports: [CommonModule, RandomRoutingModule, PageModule],
})
export class RandomModule {}
