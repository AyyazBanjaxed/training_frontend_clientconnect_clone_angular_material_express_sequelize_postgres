import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  constructor(private httpClient: HttpClient) {}

  getContacts() {
    return this.httpClient.get(environment.backendBaseUrl + '/contact');
  }

  searchContacts(keyword: string) {
    return this.httpClient.get(
      environment.backendBaseUrl + '/contact/search/' + keyword
    );
  }

  deleteContacts(ids: any[]) {
    return this.httpClient.delete(environment.backendBaseUrl + '/contact', {
      body: { ids },
    });
  }

  createContacts(payload: any) {
    return this.httpClient.post(
      environment.backendBaseUrl + '/contact',
      payload
    );
  }
}
