import { Component, OnInit } from '@angular/core';
import { Player } from '../player';
import { PlayerService } from '../player.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.component.html',
  styleUrls: ['./player-details.component.css']
})
export class PlayerDetailsComponent implements OnInit {

  player = new Player();
  submitted = false;
  message: string;
  constructor(
    private playerService: PlayerService,
    private route: ActivatedRoute,
    private location: Location
  ) {
  }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.playerService.getPlayer(id)
      .subscribe(player => this.player = player);
  }
  update(): void {
    this.submitted = true;
    this.playerService.updatePlayer(this.player)
        .subscribe(result => this.message = 'Player Updated Successfully!');
  }

  delete(): void {
    this.submitted = true;
    this.playerService.deletePlayer(this.player.id)
        .subscribe(result => this.message = 'Player Deleted Successfully!');
  }

  goBack(): void {
    this.location.back();
  }

}
