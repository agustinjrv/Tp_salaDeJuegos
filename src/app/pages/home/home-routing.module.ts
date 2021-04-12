import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { HomeComponent } from './home.component';
import { QuienSoyComponent } from './quien-soy/quien-soy.component';

const routes: Routes = [
        {path:'', component: HomeComponent },
        {path:"usuario",component:QuienSoyComponent},
        {path:'juegos', loadChildren: () => import('./juegos/juegos.module').then(m => m.JuegosModule)},
        {path:"chat",component:ChatComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

