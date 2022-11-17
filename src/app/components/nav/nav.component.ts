import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  constructor() {}

  toggleDropdown() {
    let dropdownContent = document.querySelector('.dropdown__content');
    let dropdownButton = document.querySelector('#dropdown__button');
    dropdownButton?.addEventListener('click', function () {
      dropdownContent?.classList.toggle('dropdown__block');
      dropdownButton?.classList.toggle('dropdown__click');
    });
  }

  ngOnInit(): void {
    this.toggleDropdown();
  }
}
