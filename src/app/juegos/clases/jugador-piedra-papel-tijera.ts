import { EpiedraPapelTijera } from "src/app/enumerados/epiedra-papel-tijera.enum";

export class JugadorPiedraPapelTijera 
{
    public seleccion:EpiedraPapelTijera;
    public victorias:number;

    public constructor()
    {
        this.seleccion=EpiedraPapelTijera.piedra;
        this.victorias=0;
    }

    




}
