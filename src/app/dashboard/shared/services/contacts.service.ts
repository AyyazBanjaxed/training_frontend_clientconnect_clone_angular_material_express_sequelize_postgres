import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  constructor(
    private httpClient: HttpClient,
    private authService: AuthService
  ) {}

  getContacts() {
    return this.httpClient.get(environment.backendBaseUrl + '/contact', {
      headers: {
        Authorization: 'Bearer ' + this.authService.session?.token,
      },
    });
  }

  deleteContacts(ids: any[]) {
    return this.httpClient.delete(environment.backendBaseUrl + '/contact/', {
      headers: {
        Authorization: 'Bearer ' + this.authService.session?.token,
      },
      body: { contactIds: ids },
    });
  }
}
