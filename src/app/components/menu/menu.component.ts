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
  isOpen: boolean = false;

  // SIDEBAR & SCROLL LOCK
  toggleSidebar() {
    this.isOpen = !this.isOpen;
    this.document.body.classList.toggle('stopScroll');
    if (this.isOpen) {
      console.log('sidebar open');
    } else {
      console.log('sidebar closed');
    }
  }
}
