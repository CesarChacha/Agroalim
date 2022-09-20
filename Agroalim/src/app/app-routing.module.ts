import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from "./registro/registro.component";
import { LoginComponent } from "./login/login.component";
import { DashboardComponent } from "./dashboard/dashboard.component";

const routes: Routes = [
  {path : 'registro', title : 'Agroalim - Solicitud de registro', component : RegistroComponent},
  {path : 'login', title : 'Agroalim - Login', component : LoginComponent},
  {path : 'home', title : 'Agroalim', children : [
    {path : 'dashboard', title : 'Dashboard', component : DashboardComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
