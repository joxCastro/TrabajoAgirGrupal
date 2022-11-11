import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PruebaHoraGuard implements CanActivate {

  constructor(private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const hora = new Date().getHours();
    const persona = JSON.parse(localStorage.getItem('persona'));

    // Comparamos la hora con el máximo permitido
    // Esto sería en caso de que no queremos que
    // pueda entrar a la página después de las 10:00 pm
    const asd = persona.estado;
    console.log(asd);

    console.log(localStorage.persona);

    if (asd === true){
      if (persona.usuario === 'admin') {
        console.log('1');
        this.router.navigate(['/admin']);
      }
      if (persona.usuario === 'profesor') {
        this.router.navigate(['/profesor']);
        console.log('2');
      }
      if(persona.usuario === 'usuario') {
        this.router.navigate(['/home']);
        console.log('3');
      }
    }

    if (hora >= 24) {

      // Si la hora es mayor o igual redireccionamos al homeComponent
      this.router.navigate(['**']);
      // Si devolvemos FALSE no de permitirá el acceso
      return false;
    }


    // Si devolvemos TRUE si se permitirá el acceso.
    return true;
  }

}
