import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

import { Usuario } from '../clases/usuario';


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  public pathColeccion:string = "/usuarios"
  public referenciaAlaColeccion: AngularFirestoreCollection<Usuario>;


  public constructor(private bd:AngularFirestore) 
  {
    this.referenciaAlaColeccion = bd.collection(this.pathColeccion);
  }

  public AgregarUno(nuevoUsuario:Usuario)
  {
      return this.referenciaAlaColeccion.add({...nuevoUsuario});
  }

  public TraerTodos()
  {
     return this.referenciaAlaColeccion;
  }

  public BuscarUsuarioCorreo(user: Usuario) {
    return this.bd.collection(this.pathColeccion, ref => ref.where("correo", "==", user.correo));    
  }

  public BuscarPorNombreUsuario(user: Usuario) {
    return this.bd.collection(this.pathColeccion, ref => ref.where("nombreUsuario", "==", user.nombreUsuario));    
  }

  public BorrarUno(id:string)
  {
    return this.referenciaAlaColeccion.doc(id).delete();
  }

  public ModificarUno(id:string,usuario:Usuario)
  {
      return this.referenciaAlaColeccion.doc(id).update(usuario);
  }

  public BuscarUnoLogin(user: Usuario) {
    const found = this.bd.collection(this.pathColeccion, ref =>
      ref.where("correo", "==", user.correo).where("contrasenia", "==", user.contrasenia));
    return found;
  }

  


}