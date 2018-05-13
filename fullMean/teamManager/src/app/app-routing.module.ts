import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlayersComponent } from './players/players.component';
import { ListComponent } from './players/list/list.component';
import { AddComponent } from './players/add/add.component';
import { GameListComponent } from './status/game-list/game-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'players',
    pathMatch: 'full',
  },

  {
    path: 'players',
    component: PlayersComponent,
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full',
      },
      {
        path: 'list',
        component: ListComponent,
      },
      {
        path: 'addplayer',
        component: AddComponent,
      },
    ],
  },

  {
    path: 'status/game/:gameNum',
    component: GameListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
