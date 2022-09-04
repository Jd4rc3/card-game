import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { ListboxModule } from 'primeng/listbox';
import { GameModule } from '../game/game.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, LoginRoutingModule, GameModule, ListboxModule],
})
export class LoginModule {}
