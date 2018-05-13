import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Player } from '../../player';
import { PlayerService } from '../../player.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {
  player: Player = new Player();

  constructor(private playerService: PlayerService, private router: Router) {}

  ngOnInit() {}

  onSubmit() {
    this.playerService.add(this.player).subscribe(player => {
      this.player = new Player();
      this.router.navigateByUrl('/');
    });
  }
}
