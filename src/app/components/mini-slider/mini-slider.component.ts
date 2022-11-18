import { Component, OnInit } from '@angular/core';
import { Minislider } from 'src/app/model/minislider';
import minislider from '../../../assets/data/minislider.json';

@Component({
  selector: 'app-mini-slider',
  templateUrl: './mini-slider.component.html',
  styleUrls: ['./mini-slider.component.scss'],
})
export class MiniSliderComponent implements OnInit {
  constructor() {}

  details: Minislider[] = minislider;
  shuffledArray: Minislider[] = this.shuffleArray(this.details);

  ngOnInit(): void {
    console.log(this.details);
    this.splitNumber();
    console.log(this.wholeNumber);
    console.log(this.fraction);
  }

  wholeNumber: string[] = [];
  fraction: string[] = [];
  slideToRight: number = 0;

  splitNumber() {
    this.details.forEach((detail) => {
      let splitted = detail.price.toString().split('.');
      this.wholeNumber.push(splitted[0]);
      this.fraction.push(splitted[1]);
    });
  }

  slidePrev() {
    this.slideToRight -= 1;
    if (this.slideToRight < 0) {
      this.slideToRight = 0;
    }
    console.log('slideToRight: ' + this.slideToRight);
  }

  slideNext() {
    this.slideToRight += 1;
    if (this.slideToRight > 3) {
      this.slideToRight = 3;
    }
    console.log('slideToRight: ' + this.slideToRight);
  }

  shuffleArray(array: Minislider[]) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }
}
