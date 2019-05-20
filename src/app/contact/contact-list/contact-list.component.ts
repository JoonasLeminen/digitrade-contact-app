import { Component, OnInit } from '@angular/core';
import {Contact} from '../contact';
import {ContactService} from '../services/contact.service';

@Component({
  selector: 'dtca-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: Contact[];
  selectedContactName: string;

  constructor(private contactService: ContactService) {
    this.contacts = [];
    this.selectedContactName = '';
  }

  ngOnInit() {
    this.contacts = this.contactService.get();
    console.log(this.contacts);
    /*this.contacts.push(new Contact('Aku', 'Ankka', '0456123147'));
    this.contacts.push(new Contact('Roope', 'Ankka', '0406513481'));
    this.contacts.push(new Contact('Hannu', 'Hanhi', '0506234512'));
    console.log(this.contacts);*/
  }

  onContactSelected(contact: Contact): void {
    this.selectedContactName = contact.firstName + ' ' + contact.lastName;
    // alert(contact.firstName);
  }
}
