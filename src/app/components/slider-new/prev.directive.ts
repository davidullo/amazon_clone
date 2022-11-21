import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appPrev]',
})
export class PrevDirective {
  constructor(private el: ElementRef) {}

  @HostListener('click')
  prevFuction() {
    let elm =
      this.el.nativeElement.parentElement.parentElement.children[0].childNodes;
    console.log(elm);

    for (let item of elm) {
      item.style.transform = `translateX(${100}%)`;
      item.style.transition = 'transform 0.25s ease-in-out';
    }

    setTimeout(() => {
      let lastEl = elm[elm.length - 1];
      lastEl.parentNode.prepend(lastEl);
      for (let item of elm) {
        item.style.transform = `translateX(${0}%)`;
        item.style.transition = 'transform 0s ease-in-out';
      }
    }, 250);
  }
}
