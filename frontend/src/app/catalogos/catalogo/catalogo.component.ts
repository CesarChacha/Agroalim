import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { actividad, comite, facturacion, norma, organizacion, profesion, puesto, tema } from 'src/app/utils/interfaces/catalogs.interface';
import { ConfirmComponent } from 'src/app/utils/modals/confirm/confirm.component';
import { UpdateCatalogComponent } from 'src/app/utils/modals/update-catalog/update-catalog.component';
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
    private sSb: SnackbarService,
    public dialog: MatDialog
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
      let dialog = this.dialog.open(ConfirmComponent, {
        data : { data : this.dataTable[index], task : task}
      })
      dialog.afterClosed().subscribe(result => {
        if(result==='true'){
          let temp = this.dataTable[index];
          
          if(task === 'del'){
            temp.activo = false;
            temp.baja = true;
          }else if(task === 'upd'){
            temp.activo = !temp.activo;
          }
       
        }
      });
  }

  edit(index: number){
    let dialog = this.dialog.open(UpdateCatalogComponent, {
      data : { data : this.dataTable[index]}
    })

    dialog.afterClosed().subscribe(result => {
      let temp = this.dataTable[index];
      if(result){
        if(result != temp.nombre){
          temp.nombre = result;

          this.sCatalog.updateCatalog(this.endpoint,temp).subscribe(
            res => {
              this.sSb.printMessage("Actualizado")

              this.getCatalog();
            },err => {
              this.sSb.printMessage("Ocurrio un error en el servidor.")
            }
          )
        }
      }
    });
  }


}