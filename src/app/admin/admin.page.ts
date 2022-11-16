import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {

  constructor(private router: Router) {
    console.log('parte1');
  }

  ngOnInit() {
    console.log('parte2');
  }

  salir(){
    const persona = JSON.parse(localStorage.getItem('persona'));
    persona.estado = false;
    localStorage.setItem('persona',JSON.stringify(persona));
    this.router.navigate(['/login']);
  }

  crearUsuario(){
    this.router.navigate(['/crear-usuario']);
  }

}
