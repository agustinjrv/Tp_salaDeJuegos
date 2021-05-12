import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Score } from 'src/app/clases/score/score';


@Injectable({
  providedIn: 'root'
})
export class ScoreService {

  rutaDeLaColeccion = "/scores";
  referenciaAlaColeccion: AngularFirestoreCollection<Score>;
  referenciaOrdenada: AngularFirestoreCollection<Score>;


  constructor(private bd: AngularFirestore) {
    this.referenciaAlaColeccion = bd.collection(this.rutaDeLaColeccion);
    this.referenciaOrdenada = bd.collection<Score>('scores', ref => ref.orderBy('score', 'desc'));
  }

  AgregarScore(score: Score): any {
    return this.referenciaAlaColeccion.add({ ...score });
  }

  GetAll(): AngularFirestoreCollection<Score> {
    return this.referenciaOrdenada;
  }

}
