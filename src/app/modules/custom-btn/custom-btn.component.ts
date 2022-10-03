import { Component, Input } from '@angular/core';

@Component({
  selector: 'custom-btn',
  templateUrl: './custom-btn.component.html',
  styleUrls: ['./custom-btn.component.scss'],
})
export class CustomBtnComponent {
  @Input() iconName: null | string = null;
  @Input() btnType = 'button';
  @Input() loading = false;
  @Input() disabled = false;
}
