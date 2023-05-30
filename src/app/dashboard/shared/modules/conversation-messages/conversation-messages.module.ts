import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConversationMessagesComponent } from './conversation-messages.component';
import { MessageBubbleModule } from '../message-bubble/message-bubble.module';

@NgModule({
  declarations: [ConversationMessagesComponent],
  exports: [ConversationMessagesComponent],
  imports: [CommonModule, MessageBubbleModule],
})
export class ConversationMessagesModule {}
