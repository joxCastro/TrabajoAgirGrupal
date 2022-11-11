import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PruebaHoraGuard } from '../guards/prueba-hora.guard';

import { LoginPage } from './login.page';

const routes: Routes = [
  {
    path: '',
    component: LoginPage,
    canActivate: [PruebaHoraGuard],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginPageRoutingModule {}
