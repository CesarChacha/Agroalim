import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CatalogosService } from 'src/app/utils/services/catalogos.service';
import { EmpresasService } from 'src/app/utils/services/empresas.service';
import { SnackbarService } from 'src/app/utils/services/snackbar.service';

@Component({
  selector: 'app-disable-empresa',
  templateUrl: './disable-empresa.component.html',
  styleUrls: ['./disable-empresa.component.css']
})
export class DisableEmpresaComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DisableEmpresaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb:FormBuilder,
    private sCatalogs:CatalogosService,
    private sEmpresa: EmpresasService,
    private sSnackBar: SnackbarService
  ) { }

  formDisable!:FormGroup;
  causas_baja: any[] = [];

  ngOnInit(): void {
    this.initForm();
    this.getCausasBaja();
  }

  initForm(){
    this.formDisable = this.fb.group({
      id_causa_baja : ["",[Validators.required]],
      comentario_baja : ["",[Validators.required, Validators.maxLength(500)]],
      id_empresa : [this.data.id_empresa]
    });
  }

  getCausasBaja(){
    this.sCatalogs.getCatalog('causas_baja').subscribe(
      res => this.causas_baja = res
    )
  }

  onSave(){
    console.log(this.formDisable.value)
    this.sEmpresa.disableEmpresa(this.formDisable.value)
    .subscribe(
      res => {
        console.log(res)
        this.sSnackBar.printMessage("Actualizado")
        this.onNoClick();
      }
    )
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
