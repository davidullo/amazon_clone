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

  ngOnInit(): void {
    console.log(this.details);
    this.splitNumber();
    console.log(this.wholeNumber);
    console.log(this.fraction);
  }

  wholeNumber: string[] = [];
  fraction: string[] = [];

  splitNumber() {
    this.details.forEach((detail) => {
      let splitted = detail.price.toString().split('.');
      this.wholeNumber.push(splitted[0]);
      this.fraction.push(splitted[1]);
    });
  }
}
