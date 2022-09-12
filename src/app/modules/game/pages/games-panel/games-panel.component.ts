import { Component, OnInit } from '@angular/core';
import { GameModel } from 'src/app/modules/shared/game.model';
import { GameService } from '../../services/game.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-games-panel',
  templateUrl: './games-panel.component.html',
  styleUrls: ['./games-panel.component.scss'],
})
export class GamesPanelComponent implements OnInit {
  games: any = [];
  form!: FormGroup;

  constructor(private gameService: GameService, private router: Router) {
    this.buildForm();
  }

  submit() {
    const gameId = this.form.value.gameId;
    this.gameService.startGame(gameId).subscribe(() => {
      this.router.navigate(['/game/board', gameId]);
    });
  }

  ngOnInit(): void {
    this.gameService.getGames().subscribe((games) => {
      const filteredGames = games.filter(
        (game) => !game.started && !game.finished
      );

      this.games = filteredGames.map((game, index) => ({
        ...game,
        name: `#${index + 1}`,
      }));
    });
  }

  private buildForm() {
    this.form = new FormGroup({
      gameId: new FormControl('', [Validators.required]),
    });
  }
}
