import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-conversation-messages',
  templateUrl: './conversation-messages.component.html',
  styleUrls: ['./conversation-messages.component.scss'],
})
export class ConversationMessagesComponent implements OnInit {
  @Input() messages: any = [];
  @Input() contact = [];
  @Input() number = [];
  constructor() {}

  ngOnInit(): void {}
}
