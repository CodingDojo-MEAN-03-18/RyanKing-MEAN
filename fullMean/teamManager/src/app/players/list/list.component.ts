import { Component, OnInit } from '@angular/core';

import { Player } from '../../player';
import { PlayerService } from '../../player.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  all_players: Player[] = [];

  constructor(private playerService: PlayerService) {}

  ngOnInit() {
    this.getPlayers();
  }

  getPlayers() {
    this.playerService
      .list()
      .subscribe(players => (this.all_players = players));
  }

  delete(id: string, name: string) {
    const sure = confirm(`Are you sure you want to remove ${name}?`);

    if (sure) {
      this.playerService.delete(id).subscribe(player => {
        console.log('deleting', player);
        this.getPlayers();
      });
    }
  }
}
