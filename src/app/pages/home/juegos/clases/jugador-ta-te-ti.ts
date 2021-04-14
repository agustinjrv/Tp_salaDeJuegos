export enum ETateTi{ UnoUno ,UnoDos,UnoTres,
                     DosUno ,DosDos,DosTres,
                    TresUno,TresDos,TresTres}

export class JugadorTaTeTI 
{
    public seleccion:ETateTi;
    public victorias:number;


    public constructor()
    {
        this.seleccion=ETateTi.UnoUno;
        this.victorias=0;

    }

}

