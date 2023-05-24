import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTabGroup } from '@angular/material/tabs';

@Component({
  selector: 'app-notification-menu-content',
  templateUrl: './notification-menu-content.component.html',
  styleUrls: ['./notification-menu-content.component.scss'],
})
export class NotificationMenuContentComponent implements OnInit {
  @ViewChild(MatTabGroup) tabGroup: MatTabGroup | undefined;
  constructor() {}

  ngOnInit(): void {}

  tabChange(index: number) {
    if (this.tabGroup) this.tabGroup.selectedIndex = index;
  }
}
