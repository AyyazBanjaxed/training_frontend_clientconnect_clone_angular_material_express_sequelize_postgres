import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NumbersService } from '../../services/numbers.service';
import { ContactsService } from '../../services/contacts.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-new-conversation',
  templateUrl: './new-conversation.component.html',
  styleUrls: ['./new-conversation.component.scss'],
})
export class NewConversationComponent implements OnInit {
  @Output() onOpenConversation: EventEmitter<{ contact: any; number: any }> =
    new EventEmitter();
  @Output() onBackClicked: EventEmitter<any> = new EventEmitter();
  numbers: any = [];
  contacts: any = [];
  selectedNumber: any;
  constructor(
    private numbersService: NumbersService,
    private contactsService: ContactsService,
    private snackbar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.loadNumbers();
  }

  loadNumbers() {
    this.numbersService.getNumbers().subscribe((numbers) => {
      this.numbers = numbers;
    });
  }

  onSearchInputChange(event: any) {
    const keyword = event.target.value;
    this.searchContacts(keyword);
  }

  searchContacts(keyword: string) {
    this.contactsService.searchContacts(keyword).subscribe((contacts) => {
      this.contacts = contacts;
    });
  }

  openConversation(contact: any) {
    if (!this.selectedNumber) {
      this.snackbar.open('Please select a number', 'Close', {
        duration: 3000,
      });
      return;
    }

    this.onOpenConversation.emit({
      contact,
      number: this.selectedNumber,
    });
  }
}
