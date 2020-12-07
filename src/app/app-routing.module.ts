import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PasajeroListComponent } from './components/pasajero-list/pasajero-list.component';

import { VueloListComponent } from './components/vuelo-list/vuelo-list.component';
import { VueloFormComponent } from './components/vuelo-form/vuelo-form.component';
import { PasajeroFormComponent } from './components/pasajero-form/pasajero-form.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/vuelos',
    pathMatch: 'full'
  },
  {
    path: 'vuelos',
    component: VueloListComponent
  },
  {
    path: 'vuelos/add',
    component: VueloFormComponent
  },
  {
    path: 'pasajeros/edit/:id',
    component: PasajeroFormComponent
  },
  {
    path: 'pasajeros',
    redirectTo: '/pasajeros'
  },
  {
    path: 'pasajeros',
    component: PasajeroListComponent
  },
  {
    path: 'pasajeros/edit/:id',
    component: PasajeroFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
