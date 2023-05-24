import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HeaderModule } from './shared/modules/header/header.module';
import { SidebarModule } from './shared/modules/sidebar/sidebar.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ContactsModule } from './contacts/contacts.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    HeaderModule,
    SidebarModule,
    MatSidenavModule,
    ContactsModule,
  ],
})
export class DashboardModule {}
