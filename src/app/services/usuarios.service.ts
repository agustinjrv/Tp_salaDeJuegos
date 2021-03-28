import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

import { Usuario } from '../clases/usuario';


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  public pathColeccion:string = "/usuarios"
  public referenciaAlaColeccion: AngularFirestoreCollection<Usuario>;


  public constructor(db:AngularFirestore) 
  {
    this.referenciaAlaColeccion = db.collection(this.pathColeccion);
  }

  public AgregarUno(nuevoUsuario:Usuario)
  {
      return this.referenciaAlaColeccion.add({...nuevoUsuario});
  }

  public TraerTodos()
  {
     return this.referenciaAlaColeccion;
  }

  public BorrarUno(id:string)
  {
    return this.referenciaAlaColeccion.doc(id).delete();
  }

  public ModificarUno(id:string,usuario:Usuario)
  {
      return this.referenciaAlaColeccion.doc(id).update(usuario);
  }


}