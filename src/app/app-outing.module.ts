import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';
import { ErrorComponent } from './error/error.component';

const router: Routes = [ 
{path: 'dashboard', component:DashboardComponent},
{path:'login', component:LoginComponent},
{path:'registrarse', component:RegistrarseComponent},
{path:'**',component:ErrorComponent},
{path: '',redirectTo: '/proyectocv', pathMatch:'full'}

];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot (router)],
    exports:[RouterModule]
})
export class AppOutingModule { }
