import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Mensaje } from 'src/app/clases/mensaje';
import { MensajeRealService } from 'src/app/services/mensaje-real.service';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  public unMensaje:Mensaje;
  public date:Date;
  public variable:boolean;
  public item$:Observable<any[]>;
  
  
  constructor(private MensajeService:MensajeRealService,private miServicioUsuario:UsuariosService) 
  { 
    this.unMensaje=new Mensaje();
    this.date = new Date();
    this.variable=true;
    this.item$ = MensajeService.ObtenerTodos().valueChanges();
  }

  public Enviar()
  {
    //this.mensaje.usuario=this.miServicioUsuario.usuarioVigente;
    this.unMensaje.mensaje= $("#textMensaje").val()?.toString()??"";
    this.unMensaje.usuario = localStorage.getItem("usuarioLogin")?.toString()??"";
    this.unMensaje.horaYMin =  this.date.getHours() + ':' + this.date.getMinutes();

    this.MensajeService.AgregarUno(this.unMensaje).then(()=>{

      console.log("Se Envio el real");


     
    });
  }

  public Traer()
  {




    /*
    
      let listaMensajes= this.MensajeService.ObtenerTodos().valueChanges();

      let html="";
      
      listaMensajes.forEach(i => {
          i.forEach(j => {
          console.log(j);
                  html+='<section class="d-flex justify-content-end mb-4">';
                  html+='<div class="msg_cotainer_send">';
                  html+=j.mensaje;
                  html+='<span class="msg_time_send">'+j.horaYMin+'</span></div>';
                  html+='<div class="img_cont_msg">';
                  html+='</section>';
                  
                  $("#chatMensajes").html(html);
                  
                });
              });
              */
              

  }

  ngOnInit(): void {
  }

}
