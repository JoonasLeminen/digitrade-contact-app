import { Component, OnInit } from '@angular/core';
import {Contact} from '../contact';

@Component({
  selector: 'dtca-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: Contact[];

  constructor() {
    this.contacts = [];
  }

  ngOnInit() {
    this.contacts.push(new Contact('Aku', 'Ankka', '0456123147'));
    this.contacts.push(new Contact('Roope', 'Ankka', '0406513481'));
    this.contacts.push(new Contact('Hannu', 'Hanhi', '0506234512'));
    console.log(this.contacts);
  }

}
