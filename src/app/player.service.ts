import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Player } from './player';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private playersUrl = 'http://localhost:8080/api/players';  // URL to web api
  constructor(
    private http: HttpClient
  ) { }
  getPlayers(): Observable<Player[]> {
    return this.http.get<Player[]>(this.playersUrl);
  }

  getPlayer(id: number): Observable<Player> {
    const url = `${this.playersUrl}/${id}`;
    return this.http.get<Player>(url);
  }

  addPlayer(player: Player): Observable<Player> {
    return this.http.post<Player>(this.playersUrl, player, httpOptions);
  }

  deletePlayer(player: Player | number): Observable<Player> {
    const id = typeof player === 'number' ? player : player.id;
    const url = `${this.playersUrl}/${id}`;

    return this.http.delete<Player>(url, httpOptions);
  }

  updatePlayer(player: Player): Observable<any> {
    return this.http.put(this.playersUrl, player, httpOptions);
  }
}
