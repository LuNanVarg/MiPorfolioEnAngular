import { Component, ComponentRef, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProyectoCVComponent } from './proyectocv/proyectocv.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {ErrorComponent } from './error/error.component';


const routes: Routes = [
  {path: 'proyectocv', component: ProyectoCVComponent},
  {path: 'dashboard', component:DashboardComponent},
  {path: 'login', component:LoginComponent},
  {path: 'error', component:ErrorComponent },
  {path: '', redirectTo: '/proyectocv', pathMatch: 'full'}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
