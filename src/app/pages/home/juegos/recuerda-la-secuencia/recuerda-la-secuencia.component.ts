
import { Component, OnInit } from '@angular/core';
import { Score } from 'src/app/clases/score/score';
import { ScoreService } from 'src/app/services/score/score.service';
import Swal, { SweetAlertIcon } from 'sweetalert2';

@Component({
  selector: 'app-recuerda-la-secuencia',
  templateUrl: './recuerda-la-secuencia.component.html',
  styleUrls: ['./recuerda-la-secuencia.component.css']
})
export class RecuerdaLaSecuenciaComponent implements OnInit {

  public mostrar:string='';
  public secuenciaComparar:string='';
  public puntos:number=0;
  public secuenciaOculta:string='';
  public bloqueoPanel:boolean;

  public seleccionJugador:string="";
  public rutaScore='score/recuerdaLaSecuencia';
  public ruta="holaMUNDO/recuerdaLaSecuencia";


  public claseBtnIniciar='btn btn-success btn-block';
  public btnIniciar='Iniciar';

  constructor(private servicioScore:ScoreService) { 
    this.bloqueoPanel=true;
  }
  

  ngOnInit(): void {
  }

  Iniciar(){
    this.btnIniciar='Reiniciar';
    this.claseBtnIniciar='btn btn-danger btn-block';
    this.bloqueoPanel=false;

    this.ReiniciarValores();    
    this.GenerarNuevaSecuencia();
  }


  public ReiniciarValores()
  {
    this.mostrar='';
    this.secuenciaComparar='';
    this.puntos=0;
    this.secuenciaOculta='';
    this.seleccionJugador='';
  }

  public GenerarNuevaSecuencia()
  {
    this.bloqueoPanel=true;
    this.mostrar=this.secuenciaOculta;
    let recibo=Math.floor(Math.random() * (9 - 1)) + 1;
    this.secuenciaComparar+=''+recibo;
    this.mostrar+=recibo + " - ";
    

    setTimeout(()=>{
      this.bloqueoPanel=false;
      this.seleccionJugador='';
      this.secuenciaOculta=this.mostrar;
      this.mostrar='';
    },this.secuenciaComparar.length * 1000);
  }

  public ElegirNumero(numero:number)
  {
    
    if(!this.bloqueoPanel)
    {
      let error=false;
      this.seleccionJugador+=numero.toString();
      
  
        for(let i=0;i<this.seleccionJugador.length;i++)
        {
          if(!(this.seleccionJugador[i] == this.secuenciaComparar[i]))
          {
             error=true;
             break;
          }
        }
        
        if(error)
        {
          this.Error();
        }
        else{
          if(this.seleccionJugador.length==this.secuenciaComparar.length)
          {
            this.EsCorrecto();  
          }
        }
  
    }
    


  }

  public EsCorrecto()
  {
    
    this.puntos++;
    this.alert('success',"Muy bien ya vas: " + this.puntos,'top-left');
    
    setTimeout(()=>{
      this.GenerarNuevaSecuencia();

    },1000);
  }

  public Error()
  {
     this.alert('error',"Te has equivocado,numero de asiertos:" + this.puntos,'top');
     this.bloqueoPanel=true;
     this.GuardarScore();
  }

  public GuardarScore(){
    let nuevoScore:Score=new Score();
    nuevoScore.name=localStorage.getItem("usuarioLogin")??"Desconocido";
    nuevoScore.score='Cantidad de puntos: ' + this.puntos;
    this.servicioScore.AgregarUno(nuevoScore);
    
  }

   alert(icon: SweetAlertIcon, text: string,posicion:any) {
    const Toast = Swal.mixin({
      toast: true,
      position: posicion,
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
      
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })

    Toast.fire({
      icon: icon,
      title: text
    })
  }



}

