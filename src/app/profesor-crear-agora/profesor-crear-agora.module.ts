import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfesorCrearAgoraPageRoutingModule } from './profesor-crear-agora-routing.module';

import { ProfesorCrearAgoraPage } from './profesor-crear-agora.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfesorCrearAgoraPageRoutingModule
  ],
  declarations: [ProfesorCrearAgoraPage]
})
export class ProfesorCrearAgoraPageModule {}
