import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy, IonRippleEffect, isPlatform } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IonicStorageModule } from '@ionic/storage-angular';
import { QRScanner } from '@ionic-native/qr-scanner';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';




@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,
    NgxQRCodeModule,
    IonicModule.forRoot({
      swipeBackEnabled: false,
      animated: !isPlatform('android')
    }),
    AppRoutingModule,
    IonicStorageModule.forRoot()],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
