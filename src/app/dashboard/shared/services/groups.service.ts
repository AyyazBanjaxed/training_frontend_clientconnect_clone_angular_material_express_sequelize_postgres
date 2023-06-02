import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GroupsService {
  constructor(private httpClient: HttpClient) {}

  getGroups() {
    return this.httpClient.get(environment.backendBaseUrl + '/group');
  }
}
