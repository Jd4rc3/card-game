import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameRoutingModule } from './game-routing.module';
import { NewGameComponent } from './pages/new-game/new-game.component';
import { FormComponent } from './components/form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ListboxModule } from 'primeng/listbox';
import { ButtonModule } from 'primeng/button';
import { GamesPanelComponent } from './pages/games-panel/games-panel.component';
import { FieldsetModule } from 'primeng/fieldset';
import { BoardComponent } from './pages/board/board.component';
import { ProgressBarModule } from 'primeng/progressbar';
import { DeckComponent } from './components/deck/deck.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ToolbarModule } from 'primeng/toolbar';

@NgModule({
  declarations: [
    NewGameComponent,
    FormComponent,
    GamesPanelComponent,
    BoardComponent,
    DeckComponent,
    MenuBarComponent,
  ],
  imports: [
    CommonModule,
    GameRoutingModule,
    ReactiveFormsModule,
    ButtonModule,
    ListboxModule,
    ProgressBarModule,
    FieldsetModule,
    SplitButtonModule,
    ToolbarModule,
  ],
})
export class GameModule {}
