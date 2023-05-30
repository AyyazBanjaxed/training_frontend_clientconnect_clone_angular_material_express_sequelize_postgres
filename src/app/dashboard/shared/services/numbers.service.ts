import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class NumbersService {
  constructor(private httpClient: HttpClient) {}

  getNumbers() {
    return this.httpClient.get(environment.backendBaseUrl + '/number');
  }
}
