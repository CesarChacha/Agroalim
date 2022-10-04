import { Component, Input, OnInit } from '@angular/core';
import { actividad, comite, facturacion, norma, organizacion, profesion, puesto, tema } from 'src/app/utils/interfaces/catalogs.interface';
import { CatalogosService } from 'src/app/utils/services/catalogos.service';
import { SnackbarService } from 'src/app/utils/services/snackbar.service';

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
    private sCatalog: CatalogosService,
    private sSb: SnackbarService
  ) { }

  ngOnInit(): void {
    this.getCatalog();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value.toLowerCase();

    if(filterValue){
      let regex = new RegExp(filterValue);
      this.dataTable = this.dataTable.filter( c => c.nombre.toLowerCase().match(regex))
    }else{
      this.getCatalog();
    }
  }


  getCatalog(){
    this.sCatalog.getCatalog(this.endpoint).subscribe(
      res => {
        this.dataTable = res
      }
    );
  }

  save(event: Event){
    if(this.dataTable.length == 0){
      let valor = (event.target as HTMLInputElement).value.toLowerCase();
      let nombre = valor.charAt(0).toUpperCase() + valor.substr(1).toLowerCase();
      this.sCatalog.addCatalog(this.endpoint,nombre).subscribe(
        res => {
          this.sSb.printMessage(`${nombre} agregado exitosamente.`);
          (event.target as HTMLInputElement).value = "";
          this.getCatalog();
        },err => {
          this.sSb.printMessage("Ocurrio un error en el servidor.")
        }
      )
    }
  }

  update(index: number, task: string){
    let temp = this.dataTable[index];
    if(task === 'del'){
      temp.activo = false;
      temp.baja = true;
    }else if(task === 'upd'){
      temp.activo = !temp.activo;
    }

    this.sCatalog.updateCatalog(this.endpoint,temp).subscribe(
      res => {
        if(task === 'del'){
          this.sSb.printMessage("Eliminado")
        }else if(task === 'upd'){
          this.sSb.printMessage("Actualizado")
        }
      },err => {
        this.sSb.printMessage("Ocurrio un error en el servidor.")
      }
    )

  }


}