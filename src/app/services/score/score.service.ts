import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from "@angular/fire/database";
import { Score } from 'src/app/clases/score/score';


@Injectable({
  providedIn: 'root'
})
export class ScoreService {

  
  public rutaDeLaColeccion ="/Score";
  public referenciaAlaColeccion : AngularFireList<Score>;

   constructor(private bd:AngularFireDatabase)
   { 
      this.referenciaAlaColeccion = this.bd.list(this.rutaDeLaColeccion);
   }
   
   public CambiarRuta(ruta:string)
   {
      this.referenciaAlaColeccion = this.bd.list(ruta);
   }


   public AgregarUno(nuevoScore:Score):any
   {
      return this.referenciaAlaColeccion.push(nuevoScore);
   }

   public ObtenerTodos():AngularFireList<Score>
   {
      return this.referenciaAlaColeccion;
   }
   
}
