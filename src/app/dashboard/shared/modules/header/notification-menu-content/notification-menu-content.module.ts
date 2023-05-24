import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationMenuContentComponent } from './notification-menu-content.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [NotificationMenuContentComponent],
  exports: [NotificationMenuContentComponent],
  imports: [CommonModule, MatTabsModule, MatIconModule, MatButtonModule],
})
export class NotificationMenuContentModule {}
