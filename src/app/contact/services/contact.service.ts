import { Injectable } from '@angular/core';
import {Contact} from '../contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private contacts: Contact[];

  constructor() {
    this.contacts = [
      new Contact('Aku', 'Ankka', '0456123147'),
      new Contact('Roope', 'Ankka', '0406513481'),
      new Contact('Hannu', 'Hanhi', '0506234512')
    ];

    this.contacts.push(new Contact('Taavi', 'Ankka', '0446254265'));
  }

  get(): Contact[] {
    return this.contacts;
  }
}
