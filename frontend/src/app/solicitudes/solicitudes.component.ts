import { Component, OnInit } from '@angular/core';
import { empresas } from '../utils/interfaces/empresas.interface';
import { EmpresasService } from '../utils/services/empresas.service';
import { SnackbarService } from '../utils/services/snackbar.service';
import { ExportService } from "./../utils/exports/export.service";
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-solicitudes',
  templateUrl: './solicitudes.component.html',
  styleUrls: ['./solicitudes.component.css']
})
export class SolicitudesComponent implements OnInit {

  columsTable:string [] = ["Id","Empresa","RFC","Fecha solicitud","Estatus","Acciones"]
  dataTable: empresas [] = [];
  dataResponse: empresas [] = [];

  mostrarRechazados: boolean = false;

  constructor(
    private sEmpresas: EmpresasService,
    private sSb: SnackbarService,
    private datePipe: DatePipe
  ) { }

  ngOnInit(): void {
    this.getSolicitantes();
  }

  getSolicitantes(){
    this.sEmpresas.getSolicitantes().subscribe(
      res => {
        this.dataResponse = res;
        this.dataTable = this.dataResponse.filter( s => s.solicitud_rechazada === false);
      },err => {
        this.sSb.printMessage('Ocurrio un error durante la consulta.')
      }
    );
  }

  filtrarRechazados(){
    this.mostrarRechazados?this.dataTable = this.dataResponse.filter( s => s.solicitud_rechazada === false):this.dataTable = this.dataResponse;
  }

  exportArray() {
    let dataToExport: any[] = this.dataTable.map(x => ({
      Empresa: x.nombre_comercial,
      RazonSocial: x.razon_social,
      Rfc:  x.rfc,
      FechaSolicitud : this.datePipe.transform(x.fecha_solicitud),
      FechaAceptación : this.datePipe.transform(x.fecha_actualizacion),
      Activo : x.activo?'Si':'No',
      EliminadoPermanente : x.baja?'Si':'No',
      Estatus: x.solicitud_rechazada?"Rechazada":"Pendiente"
    }));
    ExportService.exportArrayToExcel(dataToExport, "ExampleArray");
  }

}
