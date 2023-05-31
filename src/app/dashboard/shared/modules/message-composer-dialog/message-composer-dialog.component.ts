import { Component, OnInit } from '@angular/core';
import { ConversationsService } from '../../services/conversations.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-message-composer-dialog',
  templateUrl: './message-composer-dialog.component.html',
  styleUrls: ['./message-composer-dialog.component.scss'],
})
export class MessageComposerDialogComponent implements OnInit {
  conversation: any;

  // conversation: any = {
  //   id: 2,
  //   userId: 4,
  //   numberId: 3,
  //   contactId: 3,
  //   createdAt: '2023-05-30T06:45:19.370Z',
  //   updatedAt: '2023-05-30T06:45:19.370Z',
  //   contact: {
  //     id: 3,
  //     name: 'abc',
  //     email: 'adfa@gmail.com',
  //     phone: '+19798594649',
  //     userId: 4,
  //     accountId: 5,
  //     createdAt: '2023-05-17T12:57:18.886Z',
  //     updatedAt: '2023-05-17T12:57:18.886Z',
  //     groups: [],
  //   },
  //   number: {
  //     id: 3,
  //     title: 'testing',
  //     twilioSid: 'PNaed6fd96425cb8899d1bcbc631a9f7c2',
  //     number: '+12525184865',
  //     userId: 4,
  //     accountId: 5,
  //     createdAt: '2023-05-18T11:55:44.709Z',
  //     updatedAt: '2023-05-18T11:55:44.709Z',
  //   },
  // };

  constructor(
    private conversationService: ConversationsService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {}

  openConversation({ contact, number }: any) {
    this.conversationService
      .create({ numberId: number.id, contactId: contact.id })
      .subscribe((conversation: any) => {
        conversation.contact = contact;
        conversation.number = number;
        this.conversation = conversation;
      });
  }

  close() {
    this.dialog.closeAll();
  }
}
