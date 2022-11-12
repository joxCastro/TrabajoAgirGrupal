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
    const ingresoUsuario = persona.usuario.substr(-10);
    const ingresoProfesor = persona.usuario.substr(-17);
    const ingresoAdmin = persona.usuario.substr(-9);

    if (asd === true){
      if (ingresoAdmin === '@agir.com') {
        this.router.navigate(['/admin']);
      }
      if (ingresoProfesor === '@profesor.duoc.cl') {
        this.router.navigate(['/profesor']);
      }
      if(ingresoUsuario === '@duocuc.cl') {
        this.router.navigate(['/home']);
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
