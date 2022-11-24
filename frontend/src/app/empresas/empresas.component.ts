import { Component, OnInit } from '@angular/core';
import { empresas } from '../utils/interfaces/empresas.interface';
import { EmpresasService } from '../utils/services/empresas.service';
import { SnackbarService } from '../utils/services/snackbar.service';

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.css']
})
export class EmpresasComponent implements OnInit {

  columsTable:string [] = ["Id","Nombre","RFC","Fecha de aceptación","Acciones"]
  dataTable: empresas [] = [];

  constructor(
    private sEmpresas: EmpresasService,
    private sSb: SnackbarService
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
}
