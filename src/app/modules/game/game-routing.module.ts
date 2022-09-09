import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewGameComponent } from './pages/new-game/new-game.component';
import { GamesPanelComponent } from './pages/games-panel/games-panel.component';

const routes: Routes = [
  { path: '', component: NewGameComponent },
  {
    path: 'games',
    component: GamesPanelComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GameRoutingModule {}
