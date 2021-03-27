import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { HomeComponent } from './componentes/home/home.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { QuienSoyComponent } from './pages/quien-soy/quien-soy.component';
import { JuegosComponent } from './pages/juegos/juegos.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    QuienSoyComponent,
    JuegosComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
