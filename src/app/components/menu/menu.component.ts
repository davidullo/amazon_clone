import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.testFun();
  }

  count = 0;
  isOpen: boolean = false;

  testFun() {
    console.log(this.count++);
  }

  // SIDEBAR
  toggleSidebar() {
    this.isOpen = !this.isOpen;
    console.log(this.count++);
  }
}
