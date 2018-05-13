import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Player } from './player';

@Injectable()
export class PlayerService {
  private base = '/api/players/';
  player: Player;

  constructor(private http: HttpClient) {}

  list(): Observable<Player[]> {
    return this.http.get<Player[]>(this.base);
  }

  add(player: Player): Observable<Player> {
    return this.http.post<Player>(this.base, player);
  }

  delete(id: string): Observable<Player> {
    return this.http.delete<Player>(this.base + id);
  }

  updateStatus(
    player: Player,
    game: string,
    status: string
  ): Observable<Player> {
    this.player = player;
    if (game === '1') {
      this.player.status1 = status;
    } else if (game === '2') {
      this.player.status2 = status;
    } else if (game === '3') {
      this.player.status3 = status;
    }

    return this.http.put<Player>(this.base + this.player._id, this.player);
  }
}
