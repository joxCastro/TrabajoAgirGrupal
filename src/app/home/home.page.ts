import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CHomeComponent } from '../componentes/c-home/c-home.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {
    //this.router.navigate(['home'+ CHomeComponent]);
  }

}
