import { Injectable } from '@angular/core';
import {Contact} from '../contact';
import {ContactHttpService} from './contact-http.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private contacts: Contact[];

  constructor(private contactHttpService: ContactHttpService) {
    /*this.contacts = [
      new Contact('Aku', 'Ankka', '0456123147'),
      new Contact('Roope', 'Ankka', '0406513481'),
      new Contact('Hannu', 'Hanhi', '0506234512')
    ];

    this.contacts.push(new Contact('Taavi', 'Ankka', '0446254265'));
  */
  }

  get(): Observable<Contact[]> {
    /*return this.contacts;*/
    /*console.log(this.contactHttpService.get());*/
    return this.contactHttpService.get();
  }
  getContactById(id): Observable<Contact> {
    return this.contactHttpService.getById(id);
  }
  updateContact(contact): Observable<Contact> {
    return this.contactHttpService.put(contact);
  }
  createContact(contact): Observable<Contact> {
    return this.contactHttpService.post(contact);
  }
  deleteContact(contact): Observable<Contact> {
    return this.contactHttpService.delete(contact);
  }
}
