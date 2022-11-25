import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profesor-crear-agora',
  templateUrl: './profesor-crear-agora.page.html',
  styleUrls: ['./profesor-crear-agora.page.scss'],
})
export class ProfesorCrearAgoraPage implements OnInit {

  title = 'app';
  elementType = 'url';
  value = 'qrfy.com/p/LeTKSg7';

  constructor() { }

  ngOnInit() {
  }


}
