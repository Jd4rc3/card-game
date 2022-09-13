import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Deck } from '../../../shared/deck.model';
import { AlertService } from '../../../shared/alert.service';
import { AuthService } from '../../../login/services/auth.service';
import { Board } from '../../../shared/board.model';
import { Player } from '../../../shared/player.model';

@Component({
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  gameId!: string;
  deck: Deck = {} as Deck;
  board!: Board;
  mainPlayer!: Player;

  constructor(
    private gameService: GameService,
    private route: ActivatedRoute,
    private alertService: AlertService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.setGameId();

    this.getBoard();

    this.setDeck();
  }

  private setDeck() {
    const { uid } = this.authService.getLoggedUser();
    this.gameService.getDeck(uid, this.gameId).subscribe({
      next: (deck: Deck) => (this.deck = deck),
      error: (error) => {
        this.alertService.errorMessage(error);
        this.router.navigate(['/game/games']);
      },
    });
  }

  setGameId() {
    this.route.paramMap.subscribe((param) => {
      this.gameId = param.get('gameId') || '';
    });
  }

  getBoard() {
    this.gameService.getBoard(this.gameId).subscribe({
      next: (board) => {
        console.log(board);
        this.board = board;
      },
      error: (error) => {
        this.alertService.errorMessage(error.error.message);
        console.log(error);
      },
    });
  }
}
