import { EpiedraPapelTijera } from "../enumerados/epiedra-papel-tijera.enum";



export class PiedraPapelTijera 
{
    public estado:Boolean;
    public seleccionJugador1:EpiedraPapelTijera;
    public seleccionJugador2:EpiedraPapelTijera;
    public victoriasJugador1:number;
    public victoriasJugador2:number;
    
    public constructor()
    {
        this.estado=false;
        this.seleccionJugador1=EpiedraPapelTijera.piedra;
        this.seleccionJugador2=EpiedraPapelTijera.piedra;
        this.victoriasJugador1=0;
        this.victoriasJugador2=0;
        
    }

    public GenerarRespuestaMaquina()
    {    
        this.seleccionJugador2=Math.floor(Math.random() * (3 - 1)) + 1; 
        
        switch (this.seleccionJugador2) 
        {
            case EpiedraPapelTijera.piedra:

                break;

            case EpiedraPapelTijera.papel:
                
                break;

            case EpiedraPapelTijera.tijera:
                
                break;
        
            
        }
    }

    public CalcularResultados()
    {
        if(this.seleccionJugador1 == EpiedraPapelTijera.piedra)
        {
            switch (this.seleccionJugador2) 
            {
                case EpiedraPapelTijera.piedra:
                    
                    this.Empate();
    
                    break;
    
                case EpiedraPapelTijera.papel:

                    this.GanoJugador2();
                    
                    break;
    
                case EpiedraPapelTijera.tijera:
                    
                     this.GanoJugador1()
                    break;
            }
        }
        else if(this.seleccionJugador1 == EpiedraPapelTijera.papel)
        {
            switch (this.seleccionJugador2) 
            {
                case EpiedraPapelTijera.piedra:
                    
                    this.GanoJugador1();
    
                    break;
    
                case EpiedraPapelTijera.papel:

                    this.Empate();
                    
                    break;
    
                case EpiedraPapelTijera.tijera:
                    
                   this.GanoJugador2();
                    break;
            }
        }
        else if(this.seleccionJugador1 == EpiedraPapelTijera.tijera)
        {
            switch (this.seleccionJugador2) 
            {
                case EpiedraPapelTijera.piedra:
                    
                    this.GanoJugador2();
    
                    break;
    
                case EpiedraPapelTijera.papel:

                    this.GanoJugador1();
                    
                    break;
    
                case EpiedraPapelTijera.tijera:
                    
                   this.Empate();
                    break;
            }
        }
        
    }
//cambiar por mostar resultado en lo posible
    public GanoJugador1()
    {
        alert("Ganaste!!! \nJugador1= " + this.seleccionJugador1 +
                         "\njugador2= " + this.seleccionJugador2 );
    }

    public GanoJugador2()
    {
        alert("Perdiste!!! \nJugador1= " + this.seleccionJugador1 +
                          "\njugador2= " + this.seleccionJugador2 );
    }

    public Empate()
    {
        alert("Empate!!! \nJugador1= " + this.seleccionJugador1 +
                          "\njugador2= " + this.seleccionJugador2 );
    }

    
/*
    public SeleccionoPiedra()
    {

    }

    public SeleccionoPapel()
    {

    }

    public SeleccionoTijera()
    {

    }
*/
    



}
