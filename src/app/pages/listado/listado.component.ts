import { Component, OnInit } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Mensaje } from 'src/app/clases/mensaje';
import {MensajeFireService} from "../../services/mensaje-fire.service";

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  item$:Observable<any[]>;

  constructor(firestore :MensajeFireService) 
  { 
    this.item$ = firestore.ObtenerTodos().valueChanges();
  }

  ngOnInit(): void {
  }

}
