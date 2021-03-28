import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import { Usuario } from '../clases/usuario';

@Injectable({
  providedIn: 'root'
})
export class AutentificacionService {

  public estaLogiado:any=false;
  public usuarioVigente:string=""; //usuario activo

  constructor( private fireAuth:AngularFireAuth) 
  { 
      fireAuth.authState.subscribe(unUsuario =>(this.estaLogiado=unUsuario))
  }
  /*
    async onLogin(unUsuario:Usuario)
    {
      try {
        return await this.fireAuth.signInWithEmailAndPassword(unUsuario.correo, unUsuario.contrasenia);

      } catch (error) {
        console.log(error);
      }
    }

  */

}
