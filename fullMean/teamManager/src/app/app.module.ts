import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayersComponent } from './players/players.component';
import { ListComponent } from './players/list/list.component';
import { AddComponent } from './players/add/add.component';
import { GameListComponent } from './status/game-list/game-list.component';

import { PlayerService } from './player.service';

@NgModule({
  declarations: [
    AppComponent,
    PlayersComponent,
    ListComponent,
    AddComponent,
    GameListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [PlayerService],
  bootstrap: [AppComponent],
})
export class AppModule {}
