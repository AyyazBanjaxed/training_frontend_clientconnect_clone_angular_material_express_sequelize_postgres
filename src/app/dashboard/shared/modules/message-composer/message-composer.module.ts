import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageComposerComponent } from './message-composer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [MessageComposerComponent],
  exports: [MessageComposerComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
  ],
})
export class MessageComposerModule {}
