/* eslint-disable @typescript-eslint/no-inferrable-types */
import { Component, OnInit } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
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

      if (persona.usuario === 'admin') {
        console.log('1.1');
        this.router.navigate(['/admin']);
      }
      if (persona.usuario === 'profesor') {
        this.router.navigate(['/profesor']);
        console.log('2.1');
      }
      if(persona.usuario === 'usuario') {
        this.router.navigate(['/home']);
        console.log('3.1');
      }
    }
  }


}