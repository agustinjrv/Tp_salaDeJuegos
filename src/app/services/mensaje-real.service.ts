import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from "@angular/fire/database";
import { Mensaje } from '../clases/mensaje';

@Injectable({
  providedIn: 'root'
})
export class MensajeRealService {

 
  public rutaDeLaColeccion ="/salaMensajes";
  public referenciaAlaColeccion : AngularFireList<Mensaje>;

   constructor(private db:AngularFireDatabase)
   { 
      this.referenciaAlaColeccion = db.list(this.rutaDeLaColeccion);
   }

   public AgregarUno(mensaje:Mensaje):any
   {
      return this.referenciaAlaColeccion.push(mensaje);
   }

   public ObtenerTodos():AngularFireList<Mensaje>
   {
      return this.referenciaAlaColeccion;
   }
   
/*
   public BorrarMensaje(id:any)
   {
      return this.referenciaAlaColeccion;
   }
 
   public ModificarMensaje(id:any,datos:any)
   {
      return this.referenciaAlaColeccion;
   }
*/
}
