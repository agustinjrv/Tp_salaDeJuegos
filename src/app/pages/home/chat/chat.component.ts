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
  public usuarioLogin;
  
  
  constructor(private MensajeService:MensajeRealService,private miServicioUsuario:UsuariosService) 
  { 
    this.unMensaje=new Mensaje();
    this.date = new Date();
    this.variable=true;
    this.item$ = MensajeService.ObtenerTodos().valueChanges();
    this.usuarioLogin=localStorage.getItem("usuarioLogin");
    console.log(this.usuarioLogin);
  }

  public Enviar()
  {
    //this.mensaje.usuario=this.miServicioUsuario.usuarioVigente;
    this.unMensaje.mensaje= $("#textMensaje").val()?.toString()??"";
    this.unMensaje.correo = localStorage.getItem("usuarioLogin")?.toString()??"";
    this.unMensaje.horaYMin =  this.date.getHours() + ':' + this.date.getMinutes();

    this.MensajeService.AgregarUno(this.unMensaje).then(()=>{

      console.log("Se Envio el real");


     
    });
  }


  ngOnInit(): void {
  }

}
