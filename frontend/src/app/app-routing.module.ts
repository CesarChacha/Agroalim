import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from "./registro/registro.component";
import { LoginComponent } from "./login/login.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { EmpresasComponent } from "./empresas/empresas.component";
import { SolicitudesComponent } from "./solicitudes/solicitudes.component";
import { CatalogosComponent } from "./catalogos/catalogos.component";
import { MiCuentaComponent } from "./mi-cuenta/mi-cuenta.component";
import { OnlyLoggedGuard } from "./utils/guards/only-logged.guard";
import { OnlyNotLoggedGuard } from "./utils/guards/only-not-logged.guard";
import { SolicitudComponent } from "./solicitudes/solicitud/solicitud.component";

const routes: Routes = [
  {path : '', redirectTo : 'login', pathMatch : 'full'},
  {path : 'registro', title : 'Agroalim - Solicitud de registro', canActivate : [ OnlyNotLoggedGuard ], component : RegistroComponent},
  {path : 'login', title : 'Agroalim - Login', canActivate : [ OnlyNotLoggedGuard ], component : LoginComponent},
  {
    path : 'home', 
    title : 'Agroalim',
    //pathMatch :  'full',
    canActivate : [ OnlyLoggedGuard ],
    children : [
      {path : '', component : DashboardComponent},
      {path : 'dashboard', title : 'Dashboard', component : DashboardComponent},
      {path : 'solicitudes', title : 'Solicitudes', component : SolicitudesComponent},
      {path : 'solicitudes/:rfc/:id_empresa', title : 'Solicitudes', component : SolicitudComponent},
      {path : 'empresas', title : 'Empresas', component : EmpresasComponent},
      {path : 'catalogos', title : 'Catalogos', component : CatalogosComponent},
      {path : 'mi-cuenta', title : 'Mi Cuenta', component : MiCuentaComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
