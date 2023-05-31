import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-conversation-messages',
  templateUrl: './conversation-messages.component.html',
  styleUrls: ['./conversation-messages.component.scss'],
})
export class ConversationMessagesComponent implements OnInit {
  @Input() messages: any = [];
  @Input() contact = [];
  @Input() number = [];
  constructor(private authService: AuthService) {
    this.authService.socket.on('message', (data: any) => {
      console.log(data);
      if (data.action === 'create') {
        this.messages.push(data.data);
      }
    });
  }

  ngOnInit(): void {}
}
