import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { SliderComponent } from './componentes/slider/slider.component';
import { ReservacionComponent } from './componentes/reservacion/reservacion.component';
import { AboutComponent } from './componentes/about/about.component';
// import { Name4Component } from './';
// import { PageNotFoundComponent } from './';

const app_routes: Routes = [
    { path: 'home', component: SliderComponent },
    { path: 'reservacion', component: ReservacionComponent},
    { path: 'about', component: AboutComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'home'},

    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
];


export const app_routing = RouterModule.forRoot(app_routes);
