import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginModule } from './modules/login/login.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => LoginModule,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), LoginModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
