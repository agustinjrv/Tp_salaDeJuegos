import { Component } from '@angular/core';
import { Usuario } from './clases/usuario';
import { AutentificacionService } from './services/autentificacion.service';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'salaDeJuegos';

  public usuarioLogin:any;
  public constructor(private servicioAutentificacion:AutentificacionService,private router:Router)
  {
      this.usuarioLogin=servicioAutentificacion.estaLogiado;  
  }

  
  ngOnInit()
  { 
    if(!this.usuarioLogin)
    {
      this.router.navigateByUrl("login");
    }
  }
}
