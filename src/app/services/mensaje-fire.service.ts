import { Injectable } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import {AngularFirestore,AngularFirestoreCollection} from "@angular/fire/firestore";
import { Mensaje } from '../clases/mensaje';


@Injectable({
  providedIn: 'root'
})
export class MensajeFireService {

  public rutaDeLaColeccion = "/mensajeFire";
  public referenciaAlaColeccion :AngularFirestoreCollection<Mensaje>;
  

   constructor(private bd: AngularFirestore)
   { 
      this.referenciaAlaColeccion = bd.collection(this.rutaDeLaColeccion);
   }

  
   public AgregarUno(mensaje:Mensaje):any
   {
     return this.referenciaAlaColeccion.add({...mensaje});
   }//laves es objeto, 3 puntitos es dinamico
 
 
   public ObtenerTodos():AngularFirestoreCollection<Mensaje>
   {
       return this.referenciaAlaColeccion;
   }
 
   public BorrarMensaje(id:any)
   {
      return this.referenciaAlaColeccion.doc(id).delete();
   }
 
   public ModificarMensaje(id:any,datos:any)
   {
      return this.referenciaAlaColeccion.doc(id).update(datos);
   }


}
