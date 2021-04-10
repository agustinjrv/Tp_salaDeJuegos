import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { QuienSoyComponent } from './pages/quien-soy/quien-soy.component';
import { HomeComponent } from './pages/home/home.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { LoginComponent } from './pages/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';




@NgModule({
  declarations: [
    AppComponent,
    QuienSoyComponent,
    HomeComponent,
    RegistroComponent,
    LoginComponent,
    PageNotFoundComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
