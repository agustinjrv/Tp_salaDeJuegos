import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public ruta:string;
  public mostrarChat:boolean;

  constructor() { 
    this.ruta="/home/chat";
    this.mostrarChat=false;
  }

  ngOnInit(): void {
  }

  public AbrirChat()
  {
    if(this.mostrarChat)
    {
      this.mostrarChat=false;
    }
    else
    {
      this.mostrarChat=true;
    }
     
     
  }

}
