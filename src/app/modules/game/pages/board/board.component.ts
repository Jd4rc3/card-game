import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  gameId!: string;

  constructor(
    private gameService: GameService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      this.gameId = param.get('gameId') || '';
    });

    this.gameService
      .getBoard(this.gameId)
      .subscribe({ next: console.log, error: console.error });
  }
}
