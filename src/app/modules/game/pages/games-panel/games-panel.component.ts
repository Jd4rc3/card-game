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
  games: GameModel[] = [];
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
    this.gameService.getGames('asd').subscribe((games) => {
      this.games = games;
      console.log(this.games);
    });
  }

  private buildForm() {
    this.form = new FormGroup({
      gameId: new FormControl('', [Validators.required]),
    });
  }
}
