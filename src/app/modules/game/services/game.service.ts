import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GameModel } from '../../shared/game.model';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private readonly BASE_URL: string = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  createGame(body: any): Observable<object> {
    return this.http.post(`${this.BASE_URL}/game/create`, body);
  }

  getGames(uid: string): Observable<GameModel[]> {
    return this.http.get<GameModel[]>(`${this.BASE_URL}/games/`);
  }

  startGame(gameId: string) {
    return this.http.post(`${this.BASE_URL}/game/start`, { gameId });
  }

  getBoard(gameId: string) {
    return this.http.get(`${this.BASE_URL}/${gameId}/board`);
  }
}
