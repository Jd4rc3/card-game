import { Component, OnInit } from '@angular/core';
import { Player } from '../../../shared/player.model';

@Component({
  selector: 'app-games-panel',
  templateUrl: './games-panel.component.html',
  styleUrls: ['./games-panel.component.scss'],
})
export class GamesPanelComponent implements OnInit {
  games: Player[] = [];

  constructor() {}

  submit() {
    console.log('submit');
  }

  ngOnInit(): void {}
}
