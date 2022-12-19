import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CatalogosService } from 'src/app/utils/services/catalogos.service';
import { EmpresasService } from 'src/app/utils/services/empresas.service';
import { SnackbarService } from 'src/app/utils/services/snackbar.service';
import { CodigoEmpresaExistsValidator } from "../../../utils/validators/codigo-empresa-exists.validators";
@Component({
  selector: 'app-decline-empresa',
  templateUrl: './decline-empresa.component.html',
  styleUrls: ['./decline-empresa.component.css']
})
export class DeclineEmpresaComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DeclineEmpresaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb:FormBuilder,
    private sCatalogs:CatalogosService,
    private sEmpresa: EmpresasService,
    private sSnackBar: SnackbarService,
    private _router: Router
  ) { }

  form!:FormGroup;
  causas_baja: any[] = [];

  ngOnInit(): void {
    this.initForm();
    this.getCausasBaja();
  }

  initForm(){
    this.form = this.fb.group({
      codigo_empresa : [""],
      comentario_aceptado : ["",[Validators.required, Validators.maxLength(500)]],
      id_empresa : [this.data.id_empresa]
    });
  }

  getCausasBaja(){
    this.sCatalogs.getCatalog('causas_baja').subscribe(
      res => this.causas_baja = res
    )
  }

  onSave(){
    console.log(this.form.value)
    this.sEmpresa.setRechazada(this.form.value).subscribe(
      res => {
        if(res){
          this.sSnackBar.printMessage("La empresa fue rechazada.","ok!");
          this.onNoClick();
          setTimeout(() => {
            this._router.navigateByUrl('/home/solicitudes')
          }, 2000);
        }else{
          this.sSnackBar.printMessage("Ocurio un error, intente más tarde","ok!");
        }
      },
      err => this.sSnackBar.printMessage("Ocurio un error, intente más tarde","ok!")
    )
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
