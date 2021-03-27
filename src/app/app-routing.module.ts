import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './pages/chat/chat.component';
import { JuegosComponent } from './pages/juegos/juegos.component';
import { QuienSoyComponent } from './pages/quien-soy/quien-soy.component';

const routes: Routes = [
  {path:"usuario",component:QuienSoyComponent},
  {path:"chat",component:ChatComponent},
  {path:"juegos",component:JuegosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
