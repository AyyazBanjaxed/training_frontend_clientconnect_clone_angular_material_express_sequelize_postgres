import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InboxComponent } from './inbox.component';

@NgModule({
  declarations: [InboxComponent],
  exports: [InboxComponent],
  imports: [CommonModule],
})
export class InboxModule {}
