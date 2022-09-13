import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Deck } from '../../../shared/deck.model';
import { AlertService } from '../../../shared/alert.service';
import { AuthService } from '../../../login/services/auth.service';
import { Board } from '../../../shared/board.model';

@Component({
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  gameId!: string;
  deck: Deck = {} as Deck;
  board!: Board;
  disable: boolean = true;
  putButtonDisable: boolean = true;

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

  private buttonDisabled() {
    if (this.board.mainPlayerId === this.authService.getLoggedUser().uid)
      this.disable = false;
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
        this.board = board;
        this.buttonDisabled();
        this.putButtonDisable = !this.board.round.isStarted;
        console.log(board);
      },
      error: (error) => {
        this.alertService.errorMessage(error.error.message);
        console.log(error);
      },
    });
  }
}
