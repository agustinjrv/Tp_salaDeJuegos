import { Component, Input, OnInit } from '@angular/core';
import { Score } from 'src/app/clases/score/score';
import { ScoreService } from 'src/app/services/score/score.service';


@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {

  @Input() nuevoScore:Score;
  public lista:any;
  

  constructor(private servicioScore:ScoreService) { 
    this.nuevoScore = new Score();
    this.lista = this.servicioScore.GetAll().valueChanges();
    
  }

  ngOnInit(): void {
    this.guardarScore();
  }

  public guardarScore(){
    this.servicioScore.AgregarScore(this.nuevoScore);
  }


}
