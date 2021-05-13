import { RecuerdaLaSecuenciaComponent } from './pages/home/juegos/recuerda-la-secuencia/recuerda-la-secuencia.component';
import { TaTeTiComponent } from './pages/home/juegos/ta-te-ti/ta-te-ti.component';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { HomeComponent } from './pages/home/home.component';


import { QuienSoyComponent } from './pages/quien-soy/quien-soy.component';
import { UsuarioComponent } from './pages/home/usuario/usuario.component';
import { ChatComponent } from './pages/home/chat/chat.component';
import { JuegosComponent } from './pages/home/juegos/juegos.component';
import { PiedraPapelTijeraComponent } from './pages/home/juegos/piedra-papel-tijera/piedra-papel-tijera.component';
import { MemotestComponent } from './pages/home/juegos/memotest/memotest.component';
import { HttpClientModule } from '@angular/common/http';
import * as bootstrap from "bootstrap";
import * as $ from "jquery";
import { PreguntarAlUsuarioComponent } from './pages/preguntar-al-usuario/preguntar-al-usuario.component';
import { ScoreComponent } from './componentes/score/score.component';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    PageNotFoundComponent,
    HomeComponent,
    JuegosComponent,    
    ChatComponent,    
    QuienSoyComponent,
    UsuarioComponent,
    TaTeTiComponent,
    PiedraPapelTijeraComponent,
    MemotestComponent,
    PreguntarAlUsuarioComponent,
    ScoreComponent,  
    RecuerdaLaSecuenciaComponent, 
    
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    BrowserAnimationsModule,
    HttpClientModule, 
    ReactiveFormsModule
      
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
