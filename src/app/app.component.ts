import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {
    console.log(localStorage.getItem('persona'));
    if (localStorage.getItem('persona.estado')) {
      this.grabarLocalStorage();
      const usuario = localStorage.getItem('persona');
      console.log(usuario);
      console.log('1');
    }

  }


  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngOnInit(){
    //const usuario = localStorage.getItem('persona');
    //console.log(usuario);
    //console.log('2');
  }

  grabarLocalStorage(){

    const persona = {
      usuario: '',
      password: '',
      estado: false
    };

    localStorage.setItem('persona',JSON.stringify(persona));
  }


}
