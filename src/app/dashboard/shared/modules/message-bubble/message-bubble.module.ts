import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageBubbleComponent } from './message-bubble.component';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [MessageBubbleComponent],
  exports: [MessageBubbleComponent],
  imports: [CommonModule, MatTooltipModule],
})
export class MessageBubbleModule {}
