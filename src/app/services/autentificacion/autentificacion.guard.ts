import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutentificacionGuard implements CanActivate {

  public constructor(private router:Router)
  {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.ChequearUsuario();
  }

  
  public ChequearUsuario()
  {
      let retorno:boolean=false

      if(localStorage.getItem("usuarioLogin"))
      {
          retorno=true;
      }
      else
      {
          this.router.navigate(["/login"]);
      }

     return retorno;
  }
  
}
