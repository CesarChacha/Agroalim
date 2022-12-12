import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { puesto } from '../utils/interfaces/catalogs.interface';
import { empresas } from '../utils/interfaces/empresas.interface';
import { CatalogosService } from '../utils/services/catalogos.service';
import { EmpresasService } from '../utils/services/empresas.service';
import { SnackbarService } from '../utils/services/snackbar.service';
import { regex as rgv } from "../utils/regex/regrex.const";
import { RfcExistsValidator } from "../utils/validators/rfc-exists.validators";
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private sCatalog: CatalogosService,
    private eService: EmpresasService,
    private sSnackbar: SnackbarService
  ) { }

  formRegistro!: FormGroup ;
  formFiles!: FormGroup ;
  comites: any [] = [
                      { nombre : 'Comité de Inocuidad, Calidad y Regulación Alimentaria', descripcion : '(Gerente de calidad, gerente de seguridad alimentaria o afín)'},
                      { nombre : 'Comité de Innovación y Tecnología', descripcion : '(Gerente de investigación y desarrollo, gerente de tecnología o responsable de innovación)'},
                      { nombre : 'Comité de Sustentabilidad y Responsabilidad Social', descripcion : '(Gerente de sostenibilidad, gerente de responsabilidad social o responsable de temas afines)'},
                      { nombre : 'Comité de Cadena de Valor', descripcion : '(Gerente de compras, gerente comercial, gerente de cadena de suministro, responsable de compras de productos alimenticios o afín)'},
                      { nombre : 'Comité de Desarrollo Humano', descripcion : '(Gerente de recursos humanos)'},
                      { nombre : 'Comité de Eficiencia Operativa', descripcion : '(Gerente de operaciones, gerente de calidad en procesos, gerente de excelencia operacional)'},
                      { nombre : 'Comité de Comercio exterior', descripcion : '(Director, Gerente o coordinador de exportaciones)'},
                      { nombre : 'Comité de 4.0', descripcion : '(Gerente de operaciones, gerente de calidad en procesos, Mantenimiento, Automatización)'},
                    ]
  rol_empresa: any [] = [{ nombre : 'Responsable ante el clúster', descripcion : ''},{ nombre : 'Director(a) general', descripcion : ''},{ nombre : 'Asistente director(a) general', descripcion : ''},{ nombre : 'Contacto de cobranza', descripcion : ''}]
  tipos_negocio: any [] = [{ nombre : 'Productos'},{ nombre : 'Servicios'}]
  exportaciones:any[]= [{ nombre: 'Si'},{ nombre: 'No'},{ nombre: 'En proceso'}]
  normas:any[]= []
  temas: any[]= []
  cadenas_productiva: any [] = []
  facturacion_anual: any [] = []
  puestos:any[] = [];
  profesiones:any[] = [];
  organizaciones:any[] = [];

  guardando: boolean = false;
  errorMensaje: string = "";
  parte: number = 1;                       
  empresa!:empresas;
  hoy:string = "";

  ngOnInit(): void {
    this.initForm();
    this.initFilesForm();
    this.initCatalogs();
    this.hoy = new Date().toISOString();
  }

  initCatalogs(){
    this.sCatalog.getCatalog('puestos').subscribe(
      (res) => {
        this.puestos = res;
      }
    );
    this.sCatalog.getCatalog('profesiones').subscribe(
      (res) => {
        this.profesiones = res;
      }
    );
    this.sCatalog.getCatalog('cadena_productiva').subscribe(
      (res) => {
        this.cadenas_productiva = res;
      }
    );
    this.sCatalog.getCatalog('facturacion').subscribe(
      (res) => {
        this.facturacion_anual = res;
      }
    );
    this.sCatalog.getCatalog('organizaciones').subscribe(
      (res) => {
        this.organizaciones = res;
      }
    );
    this.sCatalog.getCatalog('normas').subscribe(
      (res) => {
        this.normas = res;
      }
    );
    this.sCatalog.getCatalog('temas').subscribe(
      (res) => {
        this.temas = res;
      }
    );
  }

  initForm(){
    this.formRegistro =  this.fb.group({
      nombre : ["",[ Validators.required, Validators.maxLength(256), Validators.pattern(rgv.no_blanks)]],
      razon_social : ["",[ Validators.required, Validators.maxLength(256),  Validators.pattern(rgv.no_blanks)]],
      rfc : ["",[ Validators.required, Validators.maxLength(16),  Validators.pattern(rgv.rfc), RfcExistsValidator.exists]],
      descripcion : ["",[ Validators.required, Validators.maxLength(1024), Validators.pattern(rgv.no_blanks)]],
      calle_numero:["",[ Validators.required, Validators.maxLength(512),  Validators.pattern(rgv.no_blanks)]],
      codigo_postal : ["",[ Validators.required, Validators.maxLength(8), Validators.pattern(rgv.no_blanks)]],
      colonia : ["",[ Validators.required, Validators.maxLength(128), Validators.pattern(rgv.no_blanks)]],
      municipio : ["",[ Validators.required, Validators.maxLength(128), Validators.pattern(rgv.no_blanks)]],
      estado : ["",[ Validators.required, Validators.maxLength(128), Validators.pattern(rgv.no_blanks)]],
      telefono : ["",[Validators.required, Validators.maxLength(16),  Validators.pattern(rgv.phone)]],
      sitio : ["",[Validators.required, Validators.maxLength(16),  Validators.pattern(rgv.url)]],
      responsables_cluster : this.fb.array([
        this.fb.group({
          nombre : ["",[Validators.required, Validators.maxLength(64), Validators.pattern(rgv.no_blanks)]],
          apellido : ["",[Validators.required, Validators.maxLength(64), Validators.pattern(rgv.no_blanks)]],
          telefono_oficina : ["",[Validators.required, Validators.maxLength(16), Validators.pattern(rgv.phone)]],
          telefono_whatsapp : ["",[Validators.required, Validators.maxLength(16), Validators.pattern(rgv.phone)]],
          correo : ["",[Validators.required, Validators.maxLength(64), Validators.email]],
          id_comite : [1,[]]
        }),
        this.fb.group({
          nombre : ["",[Validators.required, Validators.maxLength(64), Validators.pattern(rgv.no_blanks)]],
          apellido : ["",[Validators.required, Validators.maxLength(64), Validators.pattern(rgv.no_blanks)]],
          telefono_oficina : ["",[Validators.required, Validators.maxLength(16), Validators.pattern(rgv.phone)]],
          telefono_whatsapp : ["",[Validators.required, Validators.maxLength(16), Validators.pattern(rgv.phone)]],
          correo : ["",[Validators.required, Validators.maxLength(64), Validators.email]],
          id_comite : [2,[]]
        }),
        this.fb.group({
          nombre : ["",[Validators.required, Validators.maxLength(64), Validators.pattern(rgv.no_blanks)]],
          apellido : ["",[Validators.required, Validators.maxLength(64), Validators.pattern(rgv.no_blanks)]],
          telefono_oficina : ["",[Validators.required, Validators.maxLength(16), Validators.pattern(rgv.phone)]],
          telefono_whatsapp : ["",[Validators.required, Validators.maxLength(16), Validators.pattern(rgv.phone)]],
          correo : ["",[Validators.required, Validators.maxLength(64), Validators.email]],
          id_comite : [3,[]]
        }),
        this.fb.group({
          nombre : ["",[Validators.required, Validators.maxLength(64), Validators.pattern(rgv.no_blanks)]],
          apellido : ["",[Validators.required, Validators.maxLength(64), Validators.pattern(rgv.no_blanks)]],
          telefono_oficina : ["",[Validators.required, Validators.maxLength(16), Validators.pattern(rgv.phone)]],
          telefono_whatsapp : ["",[Validators.required, Validators.maxLength(16), Validators.pattern(rgv.phone)]],
          correo : ["",[Validators.required, Validators.maxLength(64), Validators.email]],
          id_comite : [4,[]]
        })
      ]),
      responsables_comite :  this.fb.array([
        this.fb.group({
          nombre : ["",[Validators.required, Validators.maxLength(64), Validators.pattern(rgv.no_blanks)]],
          apellido : ["",[Validators.required, Validators.maxLength(64), Validators.pattern(rgv.no_blanks)]],
          telefono_oficina : ["",[Validators.required, Validators.maxLength(16), Validators.pattern(rgv.phone)]],
          telefono_whatsapp : ["",[Validators.required, Validators.maxLength(16), Validators.pattern(rgv.phone)]],
          correo : ["",[Validators.required, Validators.maxLength(64), Validators.email]],
          puesto : ["",[Validators.required]],
          profesion : ["",[Validators.required]],
          id_comite : [5,[]]
        }),
        this.fb.group({
          nombre : ["",[Validators.required, Validators.maxLength(64), Validators.pattern(rgv.no_blanks)]],
          apellido : ["",[Validators.required, Validators.maxLength(64), Validators.pattern(rgv.no_blanks)]],
          telefono_oficina : ["",[Validators.required, Validators.maxLength(16), Validators.pattern(rgv.phone)]],
          telefono_whatsapp : ["",[Validators.required, Validators.maxLength(16), Validators.pattern(rgv.phone)]],
          correo : ["",[Validators.required, Validators.maxLength(64), Validators.email]],
          puesto : ["",[Validators.required]],
          profesion : ["",[Validators.required]],
          id_comite : [6,[]]
        }),
        this.fb.group({
          nombre : ["",[Validators.required, Validators.maxLength(64), Validators.pattern(rgv.no_blanks)]],
          apellido : ["",[Validators.required, Validators.maxLength(64), Validators.pattern(rgv.no_blanks)]],
          telefono_oficina : ["",[Validators.required, Validators.maxLength(16), Validators.pattern(rgv.phone)]],
          telefono_whatsapp : ["",[Validators.required, Validators.maxLength(16), Validators.pattern(rgv.phone)]],
          correo : ["",[Validators.required, Validators.maxLength(64), Validators.email]],
          puesto : ["",[Validators.required]],
          profesion : ["",[Validators.required]],
          id_comite : [7,[]]
        }),
        this.fb.group({
          nombre : ["",[Validators.required, Validators.maxLength(64), Validators.pattern(rgv.no_blanks)]],
          apellido : ["",[Validators.required, Validators.maxLength(64), Validators.pattern(rgv.no_blanks)]],
          telefono_oficina : ["",[Validators.required, Validators.maxLength(16), Validators.pattern(rgv.phone)]],
          telefono_whatsapp : ["",[Validators.required, Validators.maxLength(16), Validators.pattern(rgv.phone)]],
          correo : ["",[Validators.required, Validators.maxLength(64), Validators.email]],
          puesto : ["",[Validators.required]],
          profesion : ["",[Validators.required]],
          id_comite : [8,[]]
        }),
        this.fb.group({
          nombre : ["",[Validators.required, Validators.maxLength(64), Validators.pattern(rgv.no_blanks)]],
          apellido : ["",[Validators.required, Validators.maxLength(64), Validators.pattern(rgv.no_blanks)]],
          telefono_oficina : ["",[Validators.required, Validators.maxLength(16), Validators.pattern(rgv.phone)]],
          telefono_whatsapp : ["",[Validators.required, Validators.maxLength(16), Validators.pattern(rgv.phone)]],
          correo : ["",[Validators.required, Validators.maxLength(64), Validators.email]],
          puesto : ["",[Validators.required]],
          profesion : ["",[Validators.required]],
          id_comite : [9,[]]
        }),
        this.fb.group({
          nombre : ["",[Validators.required, Validators.maxLength(64), Validators.pattern(rgv.no_blanks)]],
          apellido : ["",[Validators.required, Validators.maxLength(64), Validators.pattern(rgv.no_blanks)]],
          telefono_oficina : ["",[Validators.required, Validators.maxLength(16), Validators.pattern(rgv.phone)]],
          telefono_whatsapp : ["",[Validators.required, Validators.maxLength(16), Validators.pattern(rgv.phone)]],
          correo : ["",[Validators.required, Validators.maxLength(64), Validators.email]],
          puesto : ["",[Validators.required]],
          profesion : ["",[Validators.required]],
          id_comite : [10,[]]
        }),
        this.fb.group({
          nombre : ["",[Validators.required, Validators.maxLength(64), Validators.pattern(rgv.no_blanks)]],
          apellido : ["",[Validators.required, Validators.maxLength(64), Validators.pattern(rgv.no_blanks)]],
          telefono_oficina : ["",[Validators.required, Validators.maxLength(16), Validators.pattern(rgv.phone)]],
          telefono_whatsapp : ["",[Validators.required, Validators.maxLength(16), Validators.pattern(rgv.phone)]],
          correo : ["",[Validators.required, Validators.maxLength(64), Validators.email]],
          puesto : ["",[Validators.required]],
          profesion : ["",[Validators.required]],
          id_comite : [11,[]]
        }),
        this.fb.group({
          nombre : ["",[Validators.required, Validators.maxLength(64), Validators.pattern(rgv.no_blanks)]],
          apellido : ["",[Validators.required, Validators.maxLength(64), Validators.pattern(rgv.no_blanks)]],
          telefono_oficina : ["",[Validators.required, Validators.maxLength(16), Validators.pattern(rgv.phone)]],
          telefono_whatsapp : ["",[Validators.required, Validators.maxLength(16), Validators.pattern(rgv.phone)]],
          correo : ["",[Validators.required, Validators.maxLength(64), Validators.email]],
          puesto : ["",[Validators.required]],
          profesion : ["",[Validators.required]],
          id_comite : [12,[]]
        })
      ]),
      tipo_negocio : ["",[Validators.required]],
      cadena_productiva : ["",[Validators.required]],
      numero_empleados : ["",[Validators.required, Validators.min(1)]],
      facturacion_anual : ["",[Validators.required]],
      organizaciones:["",[Validators.required]],
      comentario : ["",[Validators.required, Validators.maxLength(1024), Validators.pattern(rgv.no_blanks)]],
      normas : ["", [Validators.required]],
      paises_exporta: ["", [Validators.maxLength(2048)]],
      sugerencia: ["", [Validators.required, Validators.maxLength(1024), Validators.pattern(rgv.no_blanks)]],
      exporta :["", [Validators.required]], //NO
      temas :["", [Validators. required]],
    });
  }

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

  save(){
    if(!this.formRegistro.invalid){
      this.guardando = true;
      this.eService.saveEmpresa(this.formRegistro.value).subscribe(
        res => {
          this.guardando = false;
          if(res){
            this.sSnackbar.printMessage("Datos guardados","Ok!");
            this.empresa = res;
            this.parte = 2;
          }else{
            this.sSnackbar.printMessage("Ocurrio un error en el servidor, intente más tarde.","Ok!");
            this.errorMensaje = "Ocurrio un error";
          }
        },err => {
          console.log(err)
        }
      );
    }else{
      this.formRegistro.markAllAsTouched();
    }
    
  }

  saveRequisitos(){
    if(!this.formFiles.invalid){
      this.guardando = true;
      const formData = new FormData();
      formData.append('requisitos', this.formFiles.get('requisitosFile')!.value);
      this.eService.saveRequisitos(formData, this.empresa.id_empresa).subscribe(
        res => {
          this.sSnackbar.printMessage("Requisitos guardados","Ok!");
          this.parte = 3;
        },
        err => console.log(err)
      );
    }else{
      this.formFiles.markAllAsTouched();
    }
    
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
  get getResponsablesCluster(){
    return this.formRegistro!.controls['responsables_cluster'] as FormArray;
  }
  get getResponsablesComite(){
    return this.formRegistro!.controls['responsables_comite'] as FormArray;
  }
}
