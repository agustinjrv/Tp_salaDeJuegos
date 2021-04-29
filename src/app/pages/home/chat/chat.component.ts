import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Mensaje } from 'src/app/clases/mensaje';
import { MensajeRealService } from 'src/app/services/mensaje-real/mensaje-real.service';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  @Input() rutaChat:string="adad"
  public unMensaje:Mensaje;
  public date:Date;
  public item$:Observable<any[]>;
  public usuarioLogin;

  
  
  constructor(private MensajeService:MensajeRealService,private miServicioUsuario:UsuariosService) 
  { 
    this.unMensaje=new Mensaje();
    this.date = new Date();
    this.item$=new Observable<any[]>();
    this.usuarioLogin=localStorage.getItem("usuarioLogin");
  }
  
  ngOnInit(): void {
    this.MensajeService.CambiarRuta(this.rutaChat);
    this.item$ = this.MensajeService.ObtenerTodos().valueChanges();
  }

  
  
  public Enviar()
  {
    this.unMensaje.mensaje= $("#textMensaje").val()?.toString()??"";
    this.unMensaje.correo = localStorage.getItem("usuarioLogin")?.toString()??"";
    this.unMensaje.horaYMin =  this.date.getHours() + ':' + this.date.getMinutes();    
    $("#textMensaje").val("");
    this.MensajeService.AgregarUno(this.unMensaje).then(()=>{
      
      $("#chatMensajes").scrollTop(99999);
    });
  }


  

}
