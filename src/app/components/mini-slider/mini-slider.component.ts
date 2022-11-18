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
  }

  // addImages() {
  //   for (let i = 1; i < 21; i++) {
  //     this.images.push(`/assets/img/minislider/${i}.jpg`);
  //   }
  // }
}
