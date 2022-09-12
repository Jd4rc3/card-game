import { Component, OnInit } from '@angular/core';
import { GameModel } from 'src/app/modules/shared/game.model';
import { Player } from '../../../shared/player.model';
import { GameService } from '../../services/game.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-games-panel',
  templateUrl: './games-panel.component.html',
  styleUrls: ['./games-panel.component.scss'],
})
export class GamesPanelComponent implements OnInit {
  games: GameModel[] = [];
  form!: FormGroup;

  constructor(private gameService: GameService) {
    this.buildForm();
  }

  submit() {
    console.log(this.form.value.gameId);
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
