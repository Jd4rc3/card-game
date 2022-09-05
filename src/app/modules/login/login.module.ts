import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, LoginRoutingModule, CardModule, ButtonModule],
})
export class LoginModule {}
