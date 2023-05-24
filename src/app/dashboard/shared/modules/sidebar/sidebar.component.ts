import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { GeneralService } from '../../services/general.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  phoneNumbers = [
    {
      number: '+1234567890',
    },
    {
      number: '+1234567890',
    },
    {
      number: '+1234567890',
    },
    {
      number: '+1234567890',
    },
    {
      number: '+1234567890',
    },
    {
      number: '+1234567890',
    },
    {
      number: '+1234567890',
    },
    {
      number: '+1234567890',
    },
  ];
  constructor(
    private authService: AuthService,
    public generalService: GeneralService
  ) {}

  ngOnInit(): void {}

  logout() {
    this.authService.logout();
  }
}
