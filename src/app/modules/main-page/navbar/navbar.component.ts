import { Component } from '@angular/core';
import { BurgerService } from '@services/burger.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  constructor(public burger: BurgerService) {}

  ngOnDestroy() {
    this.burger.close();
  }
}
