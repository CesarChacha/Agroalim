import { Component, OnInit } from '@angular/core';
import { empresas } from '../utils/interfaces/empresas.interface';
import { EmpresasService } from '../utils/services/empresas.service';
import { SnackbarService } from '../utils/services/snackbar.service';

@Component({
  selector: 'app-solicitudes',
  templateUrl: './solicitudes.component.html',
  styleUrls: ['./solicitudes.component.css']
})
export class SolicitudesComponent implements OnInit {

  columsTable:string [] = ["Id","Solicitante","RFC","Fecha solicitud","Estatus","Acciones"]
  dataTable: empresas [] = [];

  constructor(
    private sEmpresas: EmpresasService,
    private sSb: SnackbarService
  ) { }

  ngOnInit(): void {
    this.getSolicitantes();
  }

  getSolicitantes(){
    this.sEmpresas.getSolicitantes().subscribe(
      res => {
        this.dataTable = res;
        console.log(res)
      },err => {
        this.sSb.printMessage('Ocurrio un error durante la consulta.')
      }
    );
  }

}
