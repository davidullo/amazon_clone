import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNext]',
})
export class NextDirective {
  constructor(private el: ElementRef) {
    console.log(this.el.nativeElement);
  }

  percentage = 0;

  @HostListener('click')

  // nextFunction() {
  //   let elm =
  //     this.el.nativeElement.parentElement.parentElement.children[0].children;

  //   if (this.percentage >= (elm.length - 1) * 100) {
  //     this.percentage = 0;
  //   } else {
  //     this.percentage += 100;
  //   }

  //   console.log(this.percentage + ' before loop');
  //   for (let item of elm) {
  //     item.style.transform = `translateX(-${this.percentage}%)`;
  //   }
  // }

  // **** Prova 2 ****
  nextFunction() {
    let elm =
      this.el.nativeElement.parentElement.parentElement.children[0].childNodes;
    console.log(elm);

    for (let item of elm) {
      item.style.transform = `translateX(-${100}%)`;
      item.style.transition = 'transform 0.25s ease-in-out';
    }

    setTimeout(() => {
      let firstEl = elm[0];
      firstEl.parentNode.appendChild(firstEl);
      for (let item of elm) {
        item.style.transform = `translateX(${0}%)`;
        item.style.transition = 'transform 0s ease-in-out';
      }
    }, 250);
  }

  // **** Prova 3 ****
  // nextFunction() {
  //   let elm = this.el.nativeElement.parentElement.parentElement.children[0];
  //   console.log(elm);
  // }
}
