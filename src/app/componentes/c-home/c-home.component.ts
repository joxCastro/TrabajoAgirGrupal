import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-c-home',
  templateUrl: './c-home.component.html',
  styleUrls: ['./c-home.component.scss'],
})
export class CHomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  salir(){
    const persona = JSON.parse(localStorage.getItem('persona'));
    persona.estado = false;
    localStorage.setItem('persona',JSON.stringify(persona));
    this.router.navigate(['/login']);
  }

}
