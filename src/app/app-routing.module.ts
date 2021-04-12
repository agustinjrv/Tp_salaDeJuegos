import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';


const routes: Routes = [
  {path: '', redirectTo: 'home/juegos', pathMatch: 'full'},
  {path:'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
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
