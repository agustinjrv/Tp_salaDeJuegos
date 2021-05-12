import { EncuestaService } from './../../services/encuesta/encuesta.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Preguntas } from 'src/app/clases/preguntas/preguntas';


@Component({
  selector: 'app-preguntar-al-usuario',
  templateUrl: './preguntar-al-usuario.component.html',
  styleUrls: ['./preguntar-al-usuario.component.css']
})
export class PreguntarAlUsuarioComponent implements OnInit {

 public preguntas:Preguntas=new Preguntas();

 encuestaForm = new FormGroup({
   nombre: new FormControl('', [
     Validators.required
   ]),
   apellido: new FormControl('', [
     Validators.required
   ]),
   edad: new FormControl('', [
     Validators.required,
     Validators.min(18),
     Validators.max(99)
   ]),
   telefono: new FormControl('', [
     Validators.required,
     Validators.pattern("^[0-9]*$"),
     Validators.maxLength(10)
   ]),
 });



  constructor(private servicioEncuesta:EncuestaService) { 
    
  }

  ngOnInit(): void {
  }

  public AgregarRespuesta()
  {
    
    this.preguntas.nombre = this.encuestaForm.get('nombre')?.value;
    this.preguntas.apellido = this.encuestaForm.get('apellido')?.value;
    this.preguntas.edad = this.encuestaForm.get('edad')?.value;
    this.preguntas.telefono =this.encuestaForm.get('telefono')?.value;
    this.servicioEncuesta.AgregarRespuesta(this.preguntas);

      alert('Gracias por responder!!');
  }

  

  

}

