import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Player } from '../../player';
import { PlayerService } from '../../player.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css'],
})
export class GameListComponent implements OnInit {
  gameNum: string;
  all_players: Player[] = [];

  constructor(
    private playerService: PlayerService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(param => {
      this.gameNum = param.get('gameNum');
      this.getPlayers();
    });
  }

  getPlayers() {
    this.playerService.list().subscribe(players => {
      this.all_players = players;
    });
  }

  updateStatus(player: Player, gameNum: string, status: string) {
    this.playerService.updateStatus(player, gameNum, status).subscribe();
  }
}
