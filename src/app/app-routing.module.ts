import { TaTeTiComponent } from './pages/home/juegos/ta-te-ti/ta-te-ti.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { HomeComponent } from './pages/home/home.component';
import { PiedraPapelTijeraComponent } from './pages/home/juegos/piedra-papel-tijera/piedra-papel-tijera.component';
import { MemotestComponent } from './pages/home/juegos/memotest/memotest.component';
import { JuegosComponent } from './pages/home/juegos/juegos.component';
import { QuienSoyComponent } from './pages/quien-soy/quien-soy.component';
import { UsuarioComponent } from './pages/home/usuario/usuario.component';


const routes: Routes = [
  {path: '', redirectTo: 'home/juegos', pathMatch: 'full'},
  //{path:'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  
  {
    path:"home",component:HomeComponent,
    children:
    [
      {path: "", component:HomeComponent},
      {path:"usuario",component:UsuarioComponent},
      {path: "juegos", component:JuegosComponent},
      {path: "piedra-papel-tijera",component:PiedraPapelTijeraComponent },
      {path: "ta-te-ti",component:TaTeTiComponent},
      {path: "memotest",component:MemotestComponent},
    ]
  },
  {path:"quienSoy",component:QuienSoyComponent},
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
