import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewConversationComponent } from './new-conversation.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatRippleModule } from '@angular/material/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [NewConversationComponent],
  exports: [NewConversationComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatTooltipModule,
    MatRippleModule,
    MatSnackBarModule,
  ],
})
export class NewConversationModule {}
