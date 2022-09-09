import { Component, OnInit } from '@angular/core';
import { Player } from '../../../shared/player.model';

@Component({
  selector: 'app-games-panel',
  templateUrl: './games-panel.component.html',
  styleUrls: ['./games-panel.component.scss'],
})
export class GamesPanelComponent implements OnInit {
  games: Player[] = [
    {
      uid: 'zxc',
      online: true,
      email: '',
      displayName: 'PedritoGame',
      photoURL: '',
    },
  ];

  constructor() {}

  submit() {
    console.log('submit');
  }

  ngOnInit(): void {}
}
