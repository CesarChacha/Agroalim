import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(
    private fb: FormBuilder
  ) { }

  formRegistro!: FormGroup ;

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.formRegistro =  this.fb.group({
      nombre : ["",[ Validators.required]],
      razon_social : ["",[ Validators.required]],
      rfc : ["",[ Validators.required]],
      descripcion : ["",[ Validators.required]],
      calle_numero:["",[ Validators.required]],
      codigo_postal : ["",[ Validators.required]],
      colonia : ["",[ Validators.required]],
      municipio : ["",[ Validators.required]],
      estado : ["",[ Validators.required]],
      telefonos : this.fb.array([]),
      sitios : this.fb.array([])
    });
    this.addSitio();
    this.addTelefono();
  }

  save(){
    console.log(this.formRegistro.value)
  }

  addTelefono(){
    const cntrs = <FormArray>this.formRegistro!.controls['telefonos'];
    cntrs.push(this.fb.group(
      {
        telefono : ["",[Validators.required]]
      }
    ));
  }

  delTelefono(index:number){
    const cntrs = <FormArray>this.formRegistro!.controls['telefonos'];
    cntrs.removeAt(index); 
  }

  addSitio(){
    const cntrs = <FormArray>this.formRegistro!.controls['sitios'];
    cntrs.push(this.fb.group(
      {
        sitio : ["",[Validators.required]]
      }
    ));
  }

  delSitio(index:number){
    const cntrs = <FormArray>this.formRegistro!.controls['sitios'];
    cntrs.removeAt(index); 
  }

  get getTelefonos(){
    return this.formRegistro!.controls['telefonos'] as FormArray;
  }

  get getSitios(){
    return this.formRegistro!.controls['sitios'] as FormArray;
  }
}
