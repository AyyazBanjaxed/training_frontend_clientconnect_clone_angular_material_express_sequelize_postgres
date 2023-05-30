import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MessagesService {
  constructor(
    private httpClient: HttpClient,
    private authService: AuthService
  ) {}

  sendMessage({
    body,
    conversationId,
    direction,
  }: {
    body: string;
    conversationId: number;
    direction: string;
  }) {
    return this.httpClient.post(environment.backendBaseUrl + '/message', {
      body,
      conversationId,
      direction,
    });
  }

  getMessages(conversationId: number) {
    return this.httpClient.get(
      environment.backendBaseUrl + '/message/conversation/' + conversationId
    );
  }
}
