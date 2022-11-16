import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfesorCrearAgoraPage } from './profesor-crear-agora.page';

const routes: Routes = [
  {
    path: '',
    component: ProfesorCrearAgoraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfesorCrearAgoraPageRoutingModule {}
