import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegistroComponent } from './registro/registro.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatSelectModule} from '@angular/material/select';
import {MatListModule} from '@angular/material/list';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatDialogModule} from '@angular/material/dialog';

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SolicitudesComponent } from './solicitudes/solicitudes.component';
import { EmpresasComponent } from './empresas/empresas.component';
import { CatalogosComponent } from './catalogos/catalogos.component';
import { MiCuentaComponent } from './mi-cuenta/mi-cuenta.component';

import { OnlyLoggedGuard } from "./utils/guards/only-logged.guard";
import { OnlyNotLoggedGuard } from "./utils/guards/only-not-logged.guard";

import { HttpClientModule } from '@angular/common/http';
import { CatalogoComponent } from './catalogos/catalogo/catalogo.component';
import { SolicitudComponent } from './solicitudes/solicitud/solicitud.component';
import { EmpresaComponent } from './empresas/empresa/empresa.component';

import { MaterialFileInputModule } from 'ngx-material-file-input';
import {MatExpansionModule} from '@angular/material/expansion';
import { PruebaArchivoComponent } from './prueba-archivo/prueba-archivo.component';
import { ConfirmComponent } from './utils/modals/confirm/confirm.component';
import { DatePipe } from '@angular/common';
import { UpdateCatalogComponent } from './utils/modals/update-catalog/update-catalog.component';
import { DisableEmpresaComponent } from './empresas/modals/disable-empresa/disable-empresa.component';
import { AcceptEmpresaComponent } from './solicitudes/modals/accept-empresa/accept-empresa.component';
import { DeclineEmpresaComponent } from './solicitudes/modals/decline-empresa/decline-empresa.component';


@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    LoginComponent,
    DashboardComponent,
    SolicitudesComponent,
    EmpresasComponent,
    CatalogosComponent,
    MiCuentaComponent,
    CatalogoComponent,
    SolicitudComponent,
    EmpresaComponent,
    PruebaArchivoComponent,
    ConfirmComponent,
    UpdateCatalogComponent,
    DisableEmpresaComponent,
    AcceptEmpresaComponent,
    DeclineEmpresaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatListModule,
    HttpClientModule,
    MatProgressBarModule,
    MatSnackBarModule,
    MatTabsModule,
    MatTooltipModule,
    MaterialFileInputModule,
    MatExpansionModule,
    MatSlideToggleModule,
    MatDialogModule
  ],
  providers: [
    OnlyLoggedGuard,
    OnlyNotLoggedGuard,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
