import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  canActivate,
  redirectLoggedInTo,
  redirectUnauthorizedTo,
} from '@angular/fire/auth-guard';
import { LoginComponent } from './modules/login/pages/login/login.component';
import { NewGameComponent } from './modules/game/pages/new-game/new-game.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    ...canActivate(() => redirectLoggedInTo(['/game'])),
  },
  {
    path: 'game',
    component: NewGameComponent,
    ...canActivate(() => redirectUnauthorizedTo([''])),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
