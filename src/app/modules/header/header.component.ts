import { Component, Inject, Input, OnDestroy, OnInit } from '@angular/core';
import { BurgerService } from '../../services/burger.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnDestroy, OnInit {
  @Input() title: string | null = null;

  private bodyClasses = this.document.body.classList;

  constructor(
    public burger: BurgerService,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnDestroy(): void {
    this.burger.close();
  }

  ngOnInit(): void {
    this.burger.close();
    this.bodyClasses.remove('burger--open');
  }

  public showBurger(): void {
    this.burger.change();

    if (this.burger.isOpen) this.bodyClasses.add('burger--open');
    else this.bodyClasses.remove('burger--open');
  }
}
