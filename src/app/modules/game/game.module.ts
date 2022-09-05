import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameRoutingModule } from './game-routing.module';
import { NewGameComponent } from './pages/new-game/new-game.component';
import { FormComponent } from './components/form/form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [NewGameComponent, FormComponent],
  imports: [CommonModule, GameRoutingModule, ReactiveFormsModule],
  providers: [],
})
export class GameModule {}
