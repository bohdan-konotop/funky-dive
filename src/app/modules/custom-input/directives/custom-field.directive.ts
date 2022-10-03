import {Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[customField]'
})
export class CustomField {
  private isPlaceholderExist = !this.hostElement.nativeElement.placeholder

  constructor(private renderer: Renderer2, private hostElement: ElementRef) {
    renderer.addClass(hostElement.nativeElement, 'text-field__input');

    if(this.isPlaceholderExist) renderer.setAttribute(hostElement.nativeElement, 'placeholder', ' ');
  }
}
