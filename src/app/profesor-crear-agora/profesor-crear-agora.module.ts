import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfesorCrearAgoraPageRoutingModule } from './profesor-crear-agora-routing.module';

import { ProfesorCrearAgoraPage } from './profesor-crear-agora.page';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgxQRCodeModule,
    ProfesorCrearAgoraPageRoutingModule
  ],
  declarations: [ProfesorCrearAgoraPage]
})
export class ProfesorCrearAgoraPageModule {}
