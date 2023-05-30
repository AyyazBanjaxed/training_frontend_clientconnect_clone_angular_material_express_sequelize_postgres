import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ConversationsService {
  constructor(
    private httpClient: HttpClient,
    private authService: AuthService
  ) {}

  create({ numberId, contactId }: { numberId: number; contactId: number }) {
    return this.httpClient.post(environment.backendBaseUrl + '/conversation', {
      numberId,
      contactId,
    });
  }
}
