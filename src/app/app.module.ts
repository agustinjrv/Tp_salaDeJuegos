import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { QuienSoyComponent } from './pages/quien-soy/quien-soy.component';
import { JuegosComponent } from './pages/juegos/juegos.component';
import { HomeComponent } from './pages/home/home.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { LoginComponent } from './pages/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatInputModule} from '@angular/material/input';
import { PiedraPapelTijeraComponent } from './pages/piedra-papel-tijera/piedra-papel-tijera.component';

@NgModule({
  declarations: [
    AppComponent,
    QuienSoyComponent,
    JuegosComponent,
    HomeComponent,
    RegistroComponent,
    LoginComponent,
    PiedraPapelTijeraComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    BrowserAnimationsModule,
    MatSliderModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
