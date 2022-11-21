import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appPrev]',
})
export class PrevDirective {
  constructor(private el: ElementRef) {}
}
