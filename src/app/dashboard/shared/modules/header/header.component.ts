import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { GeneralService } from '../../services/general.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() menuIconClicked: EventEmitter<any> = new EventEmitter();
  constructor(
    public authService: AuthService,
    public generalService: GeneralService,
    public router: Router
  ) {}

  ngOnInit(): void {}
}
