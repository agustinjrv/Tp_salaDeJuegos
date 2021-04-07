import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './pages/chat/chat.component';
import { HomeComponent } from './pages/home/home.component';
import { JuegosComponent } from './pages/juegos/juegos.component';
import { LoginComponent } from './pages/login/login.component';
import { QuienSoyComponent } from './pages/quien-soy/quien-soy.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { PiedraPapelTijeraComponent} from './pages/piedra-papel-tijera/piedra-papel-tijera.component'


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path:"usuario",component:QuienSoyComponent},
  {path:"chat",component:ChatComponent},
  {path:"juegos",component:JuegosComponent},
  {path:"home",component:HomeComponent},
  {path:"registro",component:RegistroComponent},
  {path:"login",component:LoginComponent},
  {path:"piedra-papel-tijera",component:PiedraPapelTijeraComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule
{ 
    public constructor()
    {

    }

  

    
}
