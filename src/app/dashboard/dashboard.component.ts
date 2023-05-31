import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MessageComposerDialogComponent } from './shared/modules/message-composer-dialog/message-composer-dialog.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  openMessageComposer() {
    this.dialog.open(MessageComposerDialogComponent, {
      width: '500px',
      height: '500px',
      panelClass: 'dialogPanel',
    });
  }
}
