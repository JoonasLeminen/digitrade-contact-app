import { Component, OnInit } from '@angular/core';
import {Contact} from '../contact';
import {ActivatedRoute, Router} from '@angular/router';
import {ContactService} from '../services/contact.service';
import {ToolbarServiceService} from '../services/toolbar-service.service';
import {ToolbarOptions} from '../ui/toolbar/toolbar-options';
import {ToolbarAction} from '../ui/toolbar/toolbar-action';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'dtca-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {
  contact: Contact;
  contactId: any;
  editingEnabled: boolean;

  constructor(public snackBar: MatSnackBar, private router: Router, private route: ActivatedRoute,
              private contactService: ContactService, private toolbar: ToolbarServiceService) {
    this.contact = new Contact();
  }

  ngOnInit() {
    this.contactId = this.route.snapshot.paramMap.get('id');

    let toolbarActions: ToolbarAction[];

    if (this.contactId == null) {
      this.editingEnabled = true;
      toolbarActions = [];
    } else {
      toolbarActions = [new ToolbarAction(this.onEdit.bind(this), 'edit')];

      this.contactService.getContactById(this.contactId).subscribe(response => {
        this.contact = response;
        console.log(this.contact);
      }, error => {
        console.error('Getting contact failed!');
        console.error(error);
        this.router.navigate(['/contacts']);
      });
    }
    this.toolbar.setToolbarOptions(new ToolbarOptions(true, 'Contact', toolbarActions));
  }

  onSave(): void {
    if (this.contactId == null) {
      this.editingEnabled = false;
      this.contactService.createContact(this.contact).subscribe(response => { console.log(response);
      this.router.navigate(['/contacts']);
      this.snackBar.open('Contact created', 'Ok', {duration: 3000
      });
    });
  } else {
    this.editingEnabled = false;
    this.contactService.updateContact(this.contact).subscribe(response => {
      this.contact = response;
      this.snackBar.open('Contact modified', 'Ok', {
        duration: 3000
      });
    });
    }
    this.router.navigate(['/contacts']);
  }

  onEdit() {
    let toolbarActions: ToolbarAction[];
    this.editingEnabled = !this.editingEnabled;
    if (this.editingEnabled === true) {
      console.log('Edit mode enabled');
      toolbarActions = [
        new ToolbarAction(this.onDelete.bind(this), 'delete'),
        new ToolbarAction(this.onEdit.bind(this), 'edit')
      ];
    } else {
      console.log('Edit mode disabled');
      toolbarActions = [new ToolbarAction(this.onEdit.bind(this), 'edit')];
    }
    this.toolbar.setToolbarOptions(new ToolbarOptions(true, 'Contact', toolbarActions));
  }

  onDelete() {
    this.editingEnabled = false;
    this.contactService.deleteContact(this.contact).subscribe(() => {
      this.router.navigate(['/contacts']);
  });
  }
}
