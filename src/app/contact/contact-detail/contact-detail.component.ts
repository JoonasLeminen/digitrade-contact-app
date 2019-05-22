import { Component, OnInit } from '@angular/core';
import {Contact} from '../contact';
/*import {ContactService} from '../services/contact.service';*/

@Component({
  selector: 'dtca-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {
  contact: Contact;

  constructor(/*private contactService: ContactService*/) {
    this.contact = new Contact;
  }

  ngOnInit() {
    /*this.contactService.get();*/
  }

}
