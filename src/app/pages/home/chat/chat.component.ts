import { Component, OnInit } from '@angular/core';
import { Mensaje } from 'src/app/clases/mensaje';
import { MensajeFireService } from 'src/app/services/mensaje-fire.service';
import { MensajeRealService } from 'src/app/services/mensaje-real.service';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  public mensaje:Mensaje
  
  constructor(private miServicio:MensajeFireService, private miServicioReal:MensajeRealService,private miServicioUsuario:UsuariosService) 
  { 
    this.mensaje=new Mensaje();
  }

  public Enviar()
  {
    //this.mensaje.usuario=this.miServicioUsuario.usuarioVigente;

    this.miServicio.AgregarUno(this.mensaje).then(()=>{

      console.log("Se Envio el mensaje");

    });

    this.miServicioReal.CrearUno(this.mensaje).then(()=>{

      console.log("Se Envio el real");
      
    });

    
  }

  ngOnInit(): void {
  }

}
