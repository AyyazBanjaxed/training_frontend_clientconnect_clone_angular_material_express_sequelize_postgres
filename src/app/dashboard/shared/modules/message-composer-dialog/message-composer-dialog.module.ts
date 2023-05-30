import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NewConversationModule } from '../new-conversation/new-conversation.module';
import { MessageComposerDialogComponent } from './message-composer-dialog.component';
import { ConversationModule } from '../conversation/conversation.module';

@NgModule({
  declarations: [MessageComposerDialogComponent],
  imports: [CommonModule, NewConversationModule, ConversationModule],
})
export class MessageComposerDialogModule {}
