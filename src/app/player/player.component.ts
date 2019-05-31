import { Component, OnInit } from '@angular/core';
import { Player } from '../player';
import { PlayerService } from '../player.service';
import { ClassGetter } from '@angular/compiler/src/output/output_ast';
@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  [x: string]: any;

  players: Player[];
  rows = [];
  constructor(private playerService: PlayerService) { }

  ngOnInit(): void {
    this.rows = this.players;
  }
  getPlayers() {
    return this.playerService.getPlayers()
      .subscribe(
        players => {
          this.players = players;
          this.rows = players;
          console.log(this.rows);
        }
      );
  }
}
