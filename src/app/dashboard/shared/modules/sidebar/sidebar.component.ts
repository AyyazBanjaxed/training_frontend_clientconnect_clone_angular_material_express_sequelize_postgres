import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { GeneralService } from '../../services/general.service';
import { NumbersService } from '../../services/numbers.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  phoneNumbers: any[] = [];
  constructor(
    private authService: AuthService,
    public generalService: GeneralService,
    private numbersService: NumbersService
  ) {}

  ngOnInit(): void {
    this.loadNumbers();
  }

  logout() {
    this.authService.logout();
  }

  loadNumbers() {
    this.numbersService.getNumbers().subscribe((res: any) => {
      this.phoneNumbers = res;
    });
  }
}
