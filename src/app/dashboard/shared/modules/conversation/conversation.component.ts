import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MessagesService } from '../../services/messages.service';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.scss'],
})
export class ConversationComponent implements OnInit {
  @Input() conversation: any;
  @Output() onBackClicked: EventEmitter<any> = new EventEmitter();
  messages: any = [];
  constructor(private messagesService: MessagesService) {}

  ngOnInit(): void {
    this.loadMessages();
  }

  loadMessages() {
    this.messagesService
      .getMessages(this.conversation.id)
      .subscribe((messages: any) => {
        this.messages = messages;
      });
  }

  sendMessage(event: any) {
    const message = event.message;
    this.messagesService
      .sendMessage({
        conversationId: this.conversation.id,
        body: message,
        direction: 'OUTGOING',
      })
      .subscribe((message) => {
        this.messages.push(message);
      });
  }
}
