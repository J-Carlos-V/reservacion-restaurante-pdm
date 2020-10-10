import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { PruebaComponent } from './componentes/prueba/prueba.component';
import { ReservacionComponent } from './componentes/reservacion/reservacion.component';
// import { Name3Component } from './';
// import { Name4Component } from './';
// import { PageNotFoundComponent } from './';

const app_routes: Routes = [
    { path: 'home', component: PruebaComponent },
    { path: 'reservacion', component: ReservacionComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'home'},

    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
];


export const app_routing = RouterModule.forRoot(app_routes);
