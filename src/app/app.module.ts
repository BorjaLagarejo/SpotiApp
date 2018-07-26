import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { BuscarComponent } from './componentes/buscar/buscar.component';
import { ArtistaComponent } from './componentes/artista/artista.component';
import { NavbarComponent } from './componentes/shared/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BuscarComponent,
    ArtistaComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
