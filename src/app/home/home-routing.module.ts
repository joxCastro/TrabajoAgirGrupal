import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { CHomeComponent } from '../componentes/c-home/c-home.component';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children:[
      {
        path:'c-home',
        component: CHomeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
