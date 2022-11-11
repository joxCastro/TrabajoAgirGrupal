import { Component, OnInit } from '@angular/core';
import { BdLocalService } from '../services/bd-local.service';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.page.html',
  styleUrls: ['./crear-usuario.page.scss'],
})
export class CrearUsuarioPage implements OnInit {

  nombre: string;
  nro: string;

  constructor(public bdlocalservice: BdLocalService) {}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  guardar(){
    this.bdlocalservice.crearContacto(this.nombre,this.nro,false);
  }

}
