import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConversationComponent } from './conversation.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MessageComposerModule } from '../message-composer/message-composer.module';
import { ConversationMessagesModule } from '../conversation-messages/conversation-messages.module';

@NgModule({
  declarations: [ConversationComponent],
  exports: [ConversationComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MessageComposerModule,
    ConversationMessagesModule,
  ],
})
export class ConversationModule {}
