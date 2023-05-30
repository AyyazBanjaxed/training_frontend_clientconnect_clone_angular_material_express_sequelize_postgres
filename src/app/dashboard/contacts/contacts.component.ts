import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../shared/services/contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent implements OnInit {
  contacts: any[] = [];
  constructor(private contactsService: ContactsService) {}

  ngOnInit(): void {
    this.loadContacts();
  }

  loadContacts() {
    this.contactsService.getContacts().subscribe((res: any) => {
      this.contacts = res;
    });
  }

  onSelectionChange(contact: any, e: any) {
    contact.selected = e.checked;
  }

  get selectedContacts() {
    return this.contacts.filter((contact) => contact.selected);
  }

  deleteContacts(ids: any[]) {
    this.contactsService.deleteContacts(ids).subscribe((res) => {
      this.loadContacts();
    });
  }

  deleteSelectedContacts() {
    const ids = this.selectedContacts.map((contact) => contact.id);
    this.deleteContacts(ids);
  }
}
