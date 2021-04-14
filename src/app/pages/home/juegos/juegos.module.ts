import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JuegosRoutingModule } from './juegos-routing.module';
import { JuegosComponent } from './juegos.component';
import { PiedraPapelTijeraComponent } from './piedra-papel-tijera/piedra-papel-tijera.component';
import { MemotestComponent } from './memotest/memotest.component';
import { TaTeTiComponent } from './ta-te-ti/ta-te-ti.component';
import { HomeComponent } from '../home.component';


@NgModule({
  declarations: [
    JuegosComponent,
    MemotestComponent,
    PiedraPapelTijeraComponent,
    TaTeTiComponent
  ],
  imports: [
    CommonModule,
    JuegosRoutingModule,

    

  ]
})
export class JuegosModule { }
