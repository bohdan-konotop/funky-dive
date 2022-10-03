import { Component, Input } from '@angular/core';

@Component({
  selector: 'btn-icon',
  templateUrl: './btn-icon.component.html',
  styleUrls: ['./btn-icon.component.scss'],
})
export class BtnIconComponent {
  @Input() iconName: string | null = null;
}
