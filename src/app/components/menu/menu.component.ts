import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngOnInit(): void {}

  count = 0;
  isOpen: boolean = false;

  // SIDEBAR & SCROLL LOCK
  toggleSidebar() {
    this.isOpen = !this.isOpen;
    console.log(this.count++);
    this.document.body.classList.toggle('stopScroll');
    this.document.body.classList.toggle('body__overlay');
  }
}
