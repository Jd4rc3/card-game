import { Injectable } from '@angular/core';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';

@Injectable({
  providedIn: 'root',
})
export class WebsocketService {
  private readonly BASE_URL: string = 'ws://localhost:8081/retrieve';
  private socket!: WebSocketSubject<unknown>;

  constructor() {}
}
