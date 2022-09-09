import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [],
  imports: [CommonModule, LoginRoutingModule, CardModule, ButtonModule],
})
export class LoginModule {}
