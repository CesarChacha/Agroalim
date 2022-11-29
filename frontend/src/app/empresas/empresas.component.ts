import { Component, OnInit } from '@angular/core';
import { empresas } from '../utils/interfaces/empresas.interface';
import { EmpresasService } from '../utils/services/empresas.service';
import { SnackbarService } from '../utils/services/snackbar.service';
import { ExportService } from "./../utils/exports/export.service";
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.css']
})
export class EmpresasComponent implements OnInit {

  columsTable:string [] = ["Id","Empresa","RFC","Fecha de aceptación","Acciones"]
  dataTable: empresas [] = [];

  constructor(
    private sEmpresas: EmpresasService,
    private sSb: SnackbarService,
    private datePipe: DatePipe
  ) { }

  ngOnInit(): void {
    this.getEmpresas();
  }

  getEmpresas(){
    this.sEmpresas.getEmpresas().subscribe(
      res => {
        this.dataTable = res;
      },err => {
        this.sSb.printMessage('Ocurrio un error durante la consulta.')
      }
    );
  }

  exportArray() {
    let dataToExport: any[] = this.dataTable.map(x => ({
      Empresa: x.nombre_comercial,
      RazonSocial: x.razon_social,
      Rfc:  x.rfc,
      FechaSolicitud : this.datePipe.transform(x.fecha_solicitud),
      FechaAceptación : this.datePipe.transform(x.fecha_actualizacion),
      Activo : x.activo?'Si':'No',
      EliminadoPermanente : x.baja?'Si':'No'
    }));
    ExportService.exportArrayToExcel(dataToExport, "ExampleArray");
  }
}
