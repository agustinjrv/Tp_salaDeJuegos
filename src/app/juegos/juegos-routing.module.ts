import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JuegosComponent } from './juegos.component';
import { MemotestComponent } from './memotest/memotest.component';
import { PiedraPapelTijeraComponent } from './piedra-papel-tijera/piedra-papel-tijera.component';
import { TaTeTiComponent } from './ta-te-ti/ta-te-ti.component';

const routes: Routes = [

  {path: '', component: JuegosComponent },
  {path: "piedra-papel-tijera",component:PiedraPapelTijeraComponent },
  {path: "ta-te-ti",component:TaTeTiComponent},
  {path: "memotest",component:MemotestComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JuegosRoutingModule { }

