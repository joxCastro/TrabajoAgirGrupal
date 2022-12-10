/* eslint-disable @typescript-eslint/no-inferrable-types */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BdLocalService } from '../services/bd-local.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario: string = '';
  password: string = '';

  constructor(public bdlocalservice: BdLocalService, private router: Router) { }

  ngOnInit() {}

  segmentChanged($event){
    console.log($event.detail.value);
    const direction =$event.detail.value;
    this.router.navigate(['home/'+direction]);
  }

  ingresar(){
    if (this.bdlocalservice.guardarContacto(this.usuario,this.password) === true) {
      const persona = JSON.parse(localStorage.getItem('persona'));
      persona.estado = true;
      persona.usuario = this.usuario;
      persona.password = this.password;
      localStorage.setItem('persona',JSON.stringify(persona));

      const ingresoUsuario = persona.usuario.substr(-10);
      const ingresoProfesor = persona.usuario.substr(-17);
      const ingresoAdmin = persona.usuario.substr(-9);
      console.log(ingresoUsuario + '    ' + ingresoProfesor + '    ' + ingresoAdmin);

      if (ingresoAdmin === '@agir.com') {
        this.router.navigate(['/admin']);
      }
      if (ingresoProfesor === '@profesor.duoc.cl') {
        this.router.navigate(['/profesor']);
      }
      if(ingresoUsuario === '@duocuc.cl') {
        this.router.navigate(['/home']);
      }

      if (persona.usuario === 'admin') {
        this.router.navigate(['/admin']);
      }
    }
  }


}
