import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


//Routes
import {app_routing} from "./app.routes";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { from } from 'rxjs';
import { ReservacionComponent } from './componentes/reservacion/reservacion.component';
import { PruebaComponent } from './componentes/prueba/prueba.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ReservacionComponent,
    PruebaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    app_routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
