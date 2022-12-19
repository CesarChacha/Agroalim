import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpresasService } from 'src/app/utils/services/empresas.service';
import { SnackbarService } from 'src/app/utils/services/snackbar.service';
import { AcceptEmpresaComponent } from '../modals/accept-empresa/accept-empresa.component';
import { DeclineEmpresaComponent } from '../modals/decline-empresa/decline-empresa.component';

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.css']
})
export class SolicitudComponent implements OnInit {

  constructor(
    private ar:ActivatedRoute,
    private eService: EmpresasService,
    private sbService: SnackbarService,
    private _router: Router,
    private dialog:MatDialog
  ) { }

  id_empresa: number = 0;
  rfc: string = '';
  cargando:boolean = true;
  empresa_detalles: any;

  cargandoResponsablesCluster: boolean = true;
  responsablesCluster:any[] = [];

  cargandoResponsablesComites: boolean = true;
  responsablesComites:any[] = [];

  cargandoCadenaProductiva: boolean = true;
  cadenaProductiva:any[] = [];

  cargandoNorma: boolean = true;
  normas:any[] = [];

  cargandoTema: boolean = true;
  temas:any[] = [];

  cargandoRequisitos: boolean = true;
  requisitos:any[] = [];

  ngOnInit(): void {
    this.id_empresa = this.ar.snapshot.params['id_empresa'];
    this.rfc = this.ar.snapshot.params['rfc'];
    console.log("Id Empresa", this.id_empresa, !isNaN(this.id_empresa))
    console.log("RFC", this.rfc, (typeof this.rfc === 'string'))

    this.getEmpresa(this.id_empresa);
    this.getResponsablesCluster(this.id_empresa);
    this.getResponsablesComites(this.id_empresa);
    this.getCadenaProductiva(this.id_empresa);
    this.getNormas(this.id_empresa);
    this.getTemas(this.id_empresa);
    this.getRequisitos(this.id_empresa);
  }

  getEmpresa(id:number){
    this.cargando = true;
    this.eService.getEmpresa(id).subscribe(
      res =>{ 
        this.empresa_detalles = res;
        this.cargando = false;
        console.log(res)
      }
    )
  }

  getResponsablesCluster(id:number){
    this.cargandoResponsablesCluster = true;
    this.eService.getResponsablesCluster(id).subscribe(
      res =>{ 
        this.responsablesCluster = res;
        this.cargandoResponsablesCluster = false;
      }
    )
  }

  getResponsablesComites(id:number){
    this.cargandoResponsablesComites = true;
    this.eService.getResponsablesComites(id).subscribe(
      res =>{ 
        this.responsablesComites = res;
        this.cargandoResponsablesComites = false;
      }
    )
  }

  getCadenaProductiva(id:number){
    this.cargandoCadenaProductiva = true;
    this.eService.getEmpresaCadenaProductiva(id).subscribe(
      res =>{ 
        this.cadenaProductiva = res;
        this.cargandoCadenaProductiva = false;
      }
    )
  }

  getNormas(id:number){
    this.cargandoNorma = true;
    this.eService.getEmpresaNorma(id).subscribe(
      res =>{ 
        this.normas = res;
        this.cargandoNorma = false;
      }
    )
  }

  getTemas(id:number){
    this.cargandoNorma = true;
    this.eService.getEmpresaTema(id).subscribe(
      res =>{ 
        this.temas = res;
        this.cargandoNorma = false;
      }
    )
  }

  getRequisitos(id:number){
    this.cargandoRequisitos = true;
    this.eService.getRequisitos(id).subscribe(
      res =>{ 
        this.requisitos = res;
        this.cargandoRequisitos = false;
      }
    )
  }

  descargar(url:string, file_name:string, mediaType:string){
    this.eService.downloadItem(url,file_name,mediaType);
  }

  aceptarSolicitud(){
    let dialog =  this.dialog.open(AcceptEmpresaComponent,{
      data : { 
        id_empresa : this.id_empresa,
        rfc: this.rfc
      }
    })
  }

  rechazarSolicitud(){
    let dialog =  this.dialog.open(DeclineEmpresaComponent,{
      data : { 
        id_empresa : this.id_empresa,
        rfc: this.rfc
      }
    })
  }

}
