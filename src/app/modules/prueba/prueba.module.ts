import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PruebaRoutingModule } from './prueba-routing.module';
import { LoginComponent } from './pages/login/login.component';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, PruebaRoutingModule],
})
export class PruebaModule {}
