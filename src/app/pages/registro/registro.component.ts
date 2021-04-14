import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/clases/usuario';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  public nuevoUsuario:Usuario; 

  constructor(private servicioUsuario:UsuariosService ,private router:Router) 
  { 
      this.nuevoUsuario = new Usuario();
  }

  public AgregarUno()
  {
      this.servicioUsuario.AgregarUno(this.nuevoUsuario);
      localStorage.setItem("usuarioLogin",this.nuevoUsuario.correo);
      alert("Se a registrado con exito");
      location.href ="home/juegos";
      //this.router.navigateByUrl("juegos");
      
  }  

  ngOnInit(): void {
  }

}
