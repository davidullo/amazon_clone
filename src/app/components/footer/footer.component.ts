import { Component, OnInit } from '@angular/core';
import { Section } from 'src/app/model/section';
import { Countries } from 'src/app/model/countries';
import { Branches } from 'src/app/model/branches';
import footerSections from '../../../assets/data/footer-sections.json';
import countries from '../../../assets/data/countries.json';
import branches from '../../../assets/data/branches.json';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  constructor() {}

  sections: Section[] = footerSections;
  countries: Countries[] = countries;
  branches: Branches[] = branches;

  ngOnInit(): void {
    console.log(this.sections);
    console.log(this.branches);
  }
}
