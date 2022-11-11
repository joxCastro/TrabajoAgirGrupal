import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profesor',
  templateUrl: './profesor.page.html',
  styleUrls: ['./profesor.page.scss'],
})
export class ProfesorPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  salir(){
    const persona = JSON.parse(localStorage.getItem('persona'));
    persona.estado = false;
    localStorage.setItem('persona',JSON.stringify(persona));
    this.router.navigate(['/login']);
  }

}
