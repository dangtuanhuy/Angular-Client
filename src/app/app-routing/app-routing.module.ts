import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayerComponent } from '../player/player.component';
import { PlayerDetailsComponent } from '../player-details/player-details.component';
import { AddPlayerComponent } from '../add-player/add-player.component';


const routes: Routes = [
  {
    path: 'players',
    component: PlayerComponent
  },
  {
    path: 'player/add',
    component: AddPlayerComponent
  },
  {
    path: 'players/:id ',
    component: PlayerDetailsComponent
  },
  {
    path: '',
    redirectTo: 'players',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
