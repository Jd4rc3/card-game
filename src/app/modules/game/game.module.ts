import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameRoutingModule } from './game-routing.module';
import { NewGameComponent } from './pages/new-game/new-game.component';
import { FormComponent } from './components/form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { GamesPanelComponent } from './pages/games-panel/games-panel.component';
import { FieldsetModule } from 'primeng/fieldset';
import { BoardComponent } from './pages/board/board.component';
import { MultiSelectModule } from 'primeng/multiselect';
import {ListboxModule} from "primeng/listbox";

@NgModule({
  declarations: [
    NewGameComponent,
    FormComponent,
    GamesPanelComponent,
    BoardComponent,
  ],
  imports: [
    CommonModule,
    GameRoutingModule,
    ReactiveFormsModule,
    ButtonModule,
    FieldsetModule,
    MultiSelectModule,
    ListboxModule,
  ],
})
export class GameModule {}
