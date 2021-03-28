export class Usuario 
{
    public nombreUsuario:string="";
    public edad:number=0;
    public correo:string="";
    public contrasenia:string="";
    public juegos:Array<JSON>=[];//nombreDeJuego,PartidasGanadas,MejorTiempo
    public partidasGanadas:number=0;
    public partidasJugadas:number=0;
    public mejorTiempo:string="";
}
