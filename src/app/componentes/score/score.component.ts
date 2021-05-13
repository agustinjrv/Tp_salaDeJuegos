import { Component, Input, OnInit } from '@angular/core';
import { Score } from 'src/app/clases/score/score';
import { ScoreService } from 'src/app/services/score/score.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {

  
  @Input() rutaScore:string='';
  public item$:Observable<any[]>;
  
  
  constructor(private servicioScore:ScoreService) { 
  
    this.item$=new Observable<any[]>();
  }

  ngOnInit(): void {
    this.item$ = this.servicioScore.ObtenerTodos().valueChanges();
  }
  
  


}
