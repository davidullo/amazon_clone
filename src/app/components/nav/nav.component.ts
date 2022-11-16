import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  constructor() {}

  // Stilizzo l'elemento select
  // selectStyling() {
  //   let customSelect = document.getElementsByClassName('custom-select');
  //   let customSelectLength = customSelect.length;
  //   for (let i = 0; i < customSelectLength; i++) {
  //     let selectElement = customSelect[i].getElementsByTagName('select')[0];
  //     let selectElementLength = selectElement.length;
  //     console.log(selectElementLength);
  //     // Per ogni el, aggiungo un div che sarà l'elemento selezionato
  //     let selectDiv = document.createElement('div');
  //     selectDiv.setAttribute('class', 'select-selected');
  //     selectDiv.innerHTML =
  //       selectElement.options[selectElement.selectedIndex].innerHTML;
  //     customSelect[i].appendChild(selectDiv);
  //     // Per ogni el, creo un div che conterrà la lista di options
  //     let optionList = document.createElement('div');
  //     optionList.setAttribute('class', 'select-items select-hide');
  //     for (let j = 1; j < selectElementLength; j++) {
  //       // per ogni option nel select element originale, creo un nuovo div che sarà l'elemento option
  //       let optionItem = document.createElement('div');
  //       optionItem.innerHTML = selectElement.options[j].innerHTML;
  //       optionItem.addEventListener('click', function (e) {
  //         // quando clicco su un elemento option, aggiorno il box select, e l'elemento selezionato
  //         let parentSelect =
  //           document.getElementsByTagName('select')[0].parentNode?.parentNode;
  //         let parentSelectLength = parentSelect?.length;
  //       });
  //     }
  //   }
  // }

  // select class .dropdown__content and display it as a block on click
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
