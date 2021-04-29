import { TaTeTiComponent } from './pages/home/juegos/ta-te-ti/ta-te-ti.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
    MemotestComponent
    
   
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    BrowserAnimationsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
