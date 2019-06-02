import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayerComponent } from '../player/player.component';
import { PlayerDetailsComponent } from '../player-details/player-details.component';
import { AddPlayerComponent } from '../add-player/add-player.component';
import { Route } from '@angular/compiler/src/core';

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
    path: ' ',
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
  constructor(router: Route) { }
}
