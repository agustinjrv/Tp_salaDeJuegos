import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './pages/chat/chat.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { QuienSoyComponent } from './pages/quien-soy/quien-soy.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path:"usuario",component:QuienSoyComponent},
  {path:"home",component:HomeComponent},
  {path:'juegos', loadChildren: () => import('./juegos/juegos.module').then(m => m.JuegosModule) },
  {path:"chat",component:ChatComponent},
  {path:"registro",component:RegistroComponent},
  {path:"login",component:LoginComponent},
  {path:"**",component:PageNotFoundComponent}
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
