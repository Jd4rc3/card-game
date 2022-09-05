import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginModule } from './modules/login/login.module';
import { GameModule } from './modules/game/game.module';
import {
  canActivate,
  redirectLoggedInTo,
  redirectUnauthorizedTo,
} from '@angular/fire/auth-guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => LoginModule,
    ...canActivate(() => redirectLoggedInTo(['/game'])),
  },
  {
    path: 'game',
    loadChildren: () => GameModule,
    ...canActivate(() => redirectUnauthorizedTo([''])),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
