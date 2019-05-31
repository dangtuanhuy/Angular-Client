import { Component, OnInit } from '@angular/core';
import { Player } from '../player';
import { PlayerService } from '../player.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent  {

  player = new Player();
  submitted = false;

  constructor(
    private playerService: PlayerService,
    private location: Location
  ) { }

  newPlayer(): void {
    this.submitted = false;
    this.player = new Player();
  }

  addPlayer() {
    this.submitted = true;
    this.save();
  }

  goBack(): void {
    this.location.back();
  }

  private save(): void {
    console.log(this.player);
    this.playerService.addPlayer(this.player)
      .subscribe();
  }
}
