import { Directive, ElementRef, Renderer2} from '@angular/core';

@Directive({
  selector: '[customLabel]'
})
export class CustomLabel {
  constructor(private renderer: Renderer2, private hostElement: ElementRef) {
    renderer.addClass(hostElement.nativeElement, 'text-field__label')
  }
}
