import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../shared/services/contacts.service';
import { MatDialog } from '@angular/material/dialog';
import { ContactEditorDialogComponent } from '../shared/modules/contact-editor-dialog/contact-editor-dialog.component';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent implements OnInit {
  contacts: any[] = [];
  constructor(
    private contactsService: ContactsService,
    private dialog: MatDialog
  ) {
    this.openContactEditor();
  }

  ngOnInit(): void {
    this.loadContacts();
  }

  openContactEditor() {
    this.dialog.open(ContactEditorDialogComponent, {
      width: '400px',
      height: '420px',
      panelClass: 'dialogPanel',
    });
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
