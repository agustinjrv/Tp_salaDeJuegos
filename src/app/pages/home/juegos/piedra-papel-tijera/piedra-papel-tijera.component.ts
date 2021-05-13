import { ScoreService } from 'src/app/services/score/score.service';
import { Component, OnInit } from '@angular/core';
import { Score } from 'src/app/clases/score/score';
import { EpiedraPapelTijera } from 'src/app/enumerados/epiedra-papel-tijera.enum';
import { JugadorPiedraPapelTijera } from '../clases/jugador-piedra-papel-tijera';


const PATHIMAGENES:string ="../../../assets/imagenes/piedra-papel-tijera";

@Component({
  selector: 'app-piedra-papel-tijera',
  templateUrl: './piedra-papel-tijera.component.html',
  styleUrls: ['./piedra-papel-tijera.component.css']
})

export class PiedraPapelTijeraComponent implements OnInit {
  public ruta:string;
  public rutaScore='score/piedraPapelTijera';
  public jugador1:JugadorPiedraPapelTijera;
  public jugador2:JugadorPiedraPapelTijera;
  
  public constructor(private servicioScore:ScoreService)
  {
      this.ruta="";
      this.jugador1 = new JugadorPiedraPapelTijera();
      this.jugador2 = new JugadorPiedraPapelTijera();
  }
  ngOnInit(): void {
    this.ruta="holaMUNDO/piedra-papel-tijera";
  }

  public Piedra()
  {
      $("#imagenQueCambia").attr("src",PATHIMAGENES + "/piedra.png") ;
    this.jugador1.seleccion=EpiedraPapelTijera.piedra;
  }

  public Papel()
  {
    $("#imagenQueCambia").attr("src",PATHIMAGENES + "/papel.png");
    this.jugador1.seleccion=EpiedraPapelTijera.papel;
  }

  public Tijera()
  {
    $("#imagenQueCambia").attr("src",PATHIMAGENES + "/tijera.png");
    this.jugador1.seleccion=EpiedraPapelTijera.tijera;
  }

  public GenerarRespuestaMaquina()
  {    
      this.jugador2.seleccion=Math.floor(Math.random() * (3 - 0)) + 0; 
  }

  public Jugar() ///en html cambiar por boton play
  {
      this.GenerarRespuestaMaquina();
      

      if(this.jugador1.seleccion == EpiedraPapelTijera.piedra)
      {
          switch (this.jugador2.seleccion) 
          {
              case EpiedraPapelTijera.piedra:
                  
                $("#imagenQueCambia").attr("src",PATHIMAGENES + "/piedra-piedra.jpg");
                  this.Empate();
  
                  break;
  
              case EpiedraPapelTijera.papel:
                
                $("#imagenQueCambia").attr("src",PATHIMAGENES + "/piedra-papel.jpg");
                  this.GanoJugador2();
                  
                  break;
  
              case EpiedraPapelTijera.tijera:
                $("#imagenQueCambia").attr("src",PATHIMAGENES + "/piedra-tijera.jpg");
                   this.GanoJugador1()
                  break;
          }
      }
      else if(this.jugador1.seleccion == EpiedraPapelTijera.papel)
      {
          switch (this.jugador2.seleccion) 
          {
              case EpiedraPapelTijera.piedra:
                
                  $("#imagenQueCambia").attr("src",PATHIMAGENES + "/papel-piedra.jpg");
                  this.GanoJugador1();
  
                  break;
  
              case EpiedraPapelTijera.papel:
                  
                $("#imagenQueCambia").attr("src",PATHIMAGENES + "/papel-papel.jpg");
                  this.Empate();
                  
                  break;
  
              case EpiedraPapelTijera.tijera:
                $("#imagenQueCambia").attr("src",PATHIMAGENES + "/papel-tijera.jpg");
                 this.GanoJugador2();
                  break;
          }
      }
      else if(this.jugador1.seleccion == EpiedraPapelTijera.tijera)
      {
          switch (this.jugador2.seleccion) 
          {
              case EpiedraPapelTijera.piedra:
                $("#imagenQueCambia").attr("src",PATHIMAGENES + "/tijera-piedra.jpg");
                  this.GanoJugador2();
  
                  break;
  
              case EpiedraPapelTijera.papel:
                $("#imagenQueCambia").attr("src",PATHIMAGENES + "/tijera-papel.jpg");

                  this.GanoJugador1();
                  
                  break;
  
              case EpiedraPapelTijera.tijera:
                $("#imagenQueCambia").attr("src",PATHIMAGENES + "/tijera-tijera.jpeg");
                 this.Empate();
                  break;
          }
      }
      
  }
//cambiar por mostar resultado en lo posible
  public GanoJugador1()
  {
    this.jugador1.victorias++;
    
    
    $("#resultado").html("Ganaste!!! <br>Jugador1= " + EpiedraPapelTijera[this.jugador1.seleccion] +
    "<br>Jugador2= " + EpiedraPapelTijera[this.jugador2.seleccion]); 
  }

 

  public GanoJugador2()
  {
    this.jugador2.victorias++;
    $("#resultado").html("Perdiste!!! <br>Jugador1= " + EpiedraPapelTijera[this.jugador1.seleccion] +
                                      "<br>Jugador2= " + EpiedraPapelTijera[this.jugador2.seleccion]);
  }

  public Empate()
  {
    $("#resultado").html("Empate!!!  <br>Jugador1= " + EpiedraPapelTijera[this.jugador1.seleccion] +
                                    "<br>Jugador2= " + EpiedraPapelTijera[this.jugador2.seleccion]);
  }
  
  public GuardarScore(){
    let nuevoScore:Score=new Score();
    nuevoScore.name=localStorage.getItem("usuarioLogin")??"Desconocido";
    nuevoScore.score='jugador uno= ' + this.jugador1.victorias + '  jugador dos= '+this.jugador2.victorias;
    this.servicioScore.AgregarUno(nuevoScore);
    alert('guardado');
    
  }


  

}
