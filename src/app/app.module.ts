import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';



//Routes
import {app_routing} from './app.routes';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { from } from 'rxjs';
import { ReservacionComponent } from './componentes/reservacion/reservacion.component';
import { PruebaComponent } from './componentes/prueba/prueba.component';
import { SliderComponent } from './componentes/slider/slider.component';
import { AboutComponent } from './componentes/about/about.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { ReservacionesComponent } from './componentes/reservaciones/reservaciones.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ReservacionComponent,
    PruebaComponent,
    SliderComponent,
    AboutComponent,
    ReservacionesComponent,

  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    app_routing,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
