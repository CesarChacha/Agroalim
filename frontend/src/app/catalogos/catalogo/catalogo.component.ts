import { Component, Input, OnInit } from '@angular/core';
import { actividad, comite, facturacion, norma, organizacion, profesion, puesto, tema } from 'src/app/utils/interfaces/catalogs.interface';
import { CatalogosService } from 'src/app/utils/services/catalogos.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit  {

  @Input() tableName:string = '';
  @Input() tableIndexName:string = '';
  @Input() endpoint:string = '';

  columsTable: string[] = ['Id', 'Nombre', 'Fecha Actualización','Estatus','Acciones']
  dataTable: any[] = []//puesto[] | profesion[] | norma[] | comite[] | facturacion[] | actividad[] | tema[] | organizacion[] = []



  constructor(
    private sCatalog: CatalogosService
  ) { }

  ngOnInit(): void {
    this.getInfo(this.endpoint);
  }

  applyFilter(event: Event) {
    
  }

  getInfo(endpoint: string){
    this.sCatalog.getCatalogNotBaja(endpoint).subscribe(
      res => {
        this.dataTable = res
      }
    );
  }

}