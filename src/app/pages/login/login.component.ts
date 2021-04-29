import { Component, OnInit } from '@angular/core';
import { NavigationBehaviorOptions, Router } from '@angular/router';
import { Usuario } from 'src/app/clases/usuario';
import { AutentificacionService } from 'src/app/services/autentificacion.service';
import { UsuariosService } from 'src/app/services/usuarios.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
  
  public unUsuario:Usuario; 

  constructor(private servicioUsuario:UsuariosService,private router:Router,private servicioAutentificacion:AutentificacionService) 
  { 
    this.unUsuario = new Usuario();
    

  }

  ngOnInit(): void {
  }
 /* public Login()
  {
        this.unUsuario.correo=$("#textCorreo").val()?.toString()??"";// solo para inicio rapido
        this.unUsuario.contrasenia=$("#textContraseña").val()?.toString()??""; //solop para inicio rapido

         let listaUsuarios=this.servicioUsuario.TraerTodos().valueChanges();
                    
     listaUsuarios.forEach(i => {
        i.forEach(j => {
          
            if((this.unUsuario.correo.toString()== j.correo.toString()) && (this.unUsuario.contrasenia.toString() ==j.contrasenia.toString()))
            {
              this.servicioAutentificacion.estaLogiado=this.unUsuario.correo;
              localStorage.setItem("usuarioLogin",this.unUsuario.correo);
              location.href="/home/juegos";
            }
          });
        });
        
  }*/

  public Login() {

        this.unUsuario.correo=$("#textCorreo").val()?.toString()??"";// solo para inicio rapido
        this.unUsuario.contrasenia=$("#textContraseña").val()?.toString()??""; //solop para inicio rapido

    this.servicioUsuario.BuscarUnoLogin(this.unUsuario).valueChanges().subscribe(result => {
      if (result.length == 1) {
        localStorage.setItem('usuarioLogin', this.unUsuario.correo);
        location.href="/home/juegos";
      }
      else {
        window.alert("Error usuario o contraseña invalido");
      }
    });
  }
      
  public InicioRapido()
  {
    $("#textCorreo").val("pepe@gmail.com");
    $("#textContraseña").val("123456");
  }





}




