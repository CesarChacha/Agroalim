import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmpresasService } from '../utils/services/empresas.service';

@Component({
  selector: 'app-prueba-archivo',
  templateUrl: './prueba-archivo.component.html',
  styleUrls: ['./prueba-archivo.component.css']
})
export class PruebaArchivoComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private eService: EmpresasService
  ) { }

  ngOnInit(): void {
    this.initFilesForm();
  }

  
  formFiles!: FormGroup ;
  guardando:boolean = false;

  initFilesForm(){
    this.formFiles = this.fb.group({
      requisitos : ['',[Validators.required]],
      requisitosFile : ['',[Validators.required]],
    })
  }

  onFileChange(event:any , input:string){
    const file = event.target.files[0]
    switch (input) {
      case 'requisitos':
        this.formFiles.patchValue({
          requisitosFile: file
        });
        break;
      default:
        break;
    }
    console.log(this.formFiles.value)
  }

  saveRequisitos(){
    this.guardando = true;
    const formData = new FormData();
    formData.append('requisitos', this.formFiles.get('requisitosFile')!.value);
    this.eService.saveRequisitos(formData, 1).subscribe(
      res => {
        
      },
      err => console.log(err)
    );
  }
}
