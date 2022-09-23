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
  comites: any [] = [
                      { nombre : 'Comité de Inocuidad, Calidad y Regulación Alimentaria', descripcion : '(Gerente de calidad, gerente de seguridad alimentaria o afín)'},
                      { nombre : 'Comité de Innovación y Tecnología', descripcion : '(Gerente de investigación y desarrollo, gerente de tecnología o responsable de innovación)'},
                      { nombre : 'Comité de Sustentabilidad y Responsabilidad Social', descripcion : '(Gerente de investigación y desarrollo, gerente de tecnología o responsable de innovación)'},
                      { nombre : 'Comité de Sustentabilidad y Responsabilidad Social', descripcion : '(Gerente de sostenibilidad, gerente de responsabilidad social o responsable de temas afines)'},
                      { nombre : 'Comité de Cadena de Valor', descripcion : '(Gerente de compras, gerente comercial, gerente de cadena de suministro, responsable de compras de productos alimenticios o afín)'},
                      { nombre : 'Comité de Desarrollo Humano', descripcion : '(Gerente de recursos humanos)'},
                      { nombre : 'Comité de Eficiencia Operativa', descripcion : '(Gerente de operaciones, gerente de calidad en procesos, gerente de excelencia operacional)'},
                      { nombre : 'Comité de Comercio exterior', descripcion : '(Director, Gerente o coordinador de exportaciones)'},
                      { nombre : 'Comité de 4.0', descripcion : '(Gerente de operaciones, gerente de calidad en procesos, Mantenimiento, Automatización)'},
                    ]

  rol_empresa: any [] = [
                      { nombre : 'Responsable ante el clúster', descripcion : ''},
                      { nombre : 'Director(a) general', descripcion : ''},
                      { nombre : 'Asistente director(a) general', descripcion : ''},
                      { nombre : 'Contacto de cobranza', descripcion : ''}
                    ]

  tipos_negocio: any [] = [
                      { id_tipo_negocio : 1, nombre : 'Productos', descripcion : ''},
                      { id_tipo_negocio : 1, nombre : 'Servicios', descripcion : ''},
                      { id_tipo_negocio : 1, nombre : 'Productos y servicios', descripcion : ''},
                    ]

  candenas_productiva: any [] = [
                      { id_cadena_productiva : 1, nombre : 'Producción primaria Agrícola', descripcion : ''},
                      { id_cadena_productiva : 2, nombre : 'Producción primaria Pecuaria', descripcion : ''},
                      { id_cadena_productiva : 3, nombre : 'Transformación', descripcion : ''},
                      { id_cadena_productiva : 4, nombre : 'Almacenamiento ', descripcion : ''},
                      { id_cadena_productiva : 5, nombre : 'Distribución', descripcion : ''},
                      { id_cadena_productiva : 6, nombre : 'Retail', descripcion : ''},
                      { id_cadena_productiva : 7, nombre : 'Supermercados', descripcion : ''}
                    ]

  facturacion_anual: any [] = [
                      { id_facturacion : 1, nombre : '0 - 10 Millones de pesos.', descripcion : ''},
                      { id_facturacion : 2, nombre : '10 - 50 Millones de pesos.', descripcion : ''},
                      { id_facturacion : 3, nombre : '51 - 100 Millones de pesos.', descripcion : ''},
                      { id_facturacion : 4, nombre : 'Más de 100 Millones de pesos.', descripcion : ''},
                    ]
                    proyecto_sectorAlim: any [] = [
                      {id_sectorAlim : 1, nombre: 'UANL', descripcion : '' },
                      {id_sectorAlim : 2, nombre: 'ITESM', descripcion : '' },
                      {id_sectorAlim : 3, nombre: 'UDEM', descripcion : '' },
                      {id_sectorAlim : 4, nombre: 'UERRE', descripcion : '' },
                      {id_sectorAlim : 5, nombre: 'Escuelas técnicas', descripcion : '' },
                      {id_sectorAlim : 1, nombre: 'CIATEJ', descripcion : '' },
                      {id_sectorAlim : 1, nombre: 'CIQA', descripcion : '' },
                      {id_sectorAlim : 1, nombre: 'Incubadora de nanotecnología', descripcion : '' },
                      {id_sectorAlim : 1, nombre: 'Incubadora de biotecnología', descripcion : '' },
                      {id_sectorAlim : 1, nombre: 'TECNALIA', descripcion : '' },
                      {id_sectorAlim : 1, nombre: 'CONACYT', descripcion : '' },
                      {id_sectorAlim : 1, nombre: 'OTRO', descripcion : '' },









                    ]

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
      telefonos : this.fb.array([
        this.fb.group({
          telefono : ["",[Validators.required]]
        })
      ]),
      sitios : this.fb.array([
        this.fb.group({
          sitio : ["",[Validators.required]]
        })
      ]),
      responsables_cluster : this.fb.array([
        this.fb.group({
          nombre : ["",[Validators.required]],
          apellido : ["",[Validators.required]],
          telefono_oficina : ["",[Validators.required]],
          telefono_movil : ["",[Validators.required]],
          correo : ["",[Validators.required]],
          rol_empresa : [1]
        }),
        this.fb.group({
          nombre : ["",[Validators.required]],
          apellido : ["",[Validators.required]],
          telefono_oficina : ["",[Validators.required]],
          telefono_movil : ["",[Validators.required]],
          correo : ["",[Validators.required]],
          rol_empresa : [2]
        }),
        this.fb.group({
          nombre : ["",[Validators.required]],
          apellido : ["",[Validators.required]],
          telefono_oficina : ["",[Validators.required]],
          telefono_movil : ["",[Validators.required]],
          correo : ["",[Validators.required]],
          rol_empresa : [3]
        }),
        this.fb.group({
          nombre : ["",[Validators.required]],
          apellido : ["",[Validators.required]],
          telefono_oficina : ["",[Validators.required]],
          telefono_movil : ["",[Validators.required]],
          correo : ["",[Validators.required]],
          rol_empresa : [3]
        })
      ]),
      responsables_comite :  this.fb.array([
        this.fb.group({
          nombre : ["",[Validators.required]],
          apellido : ["",[Validators.required]],
          puesto : ["",[Validators.required]],
          profesion : ["",[Validators.required]],
          telefono_oficina : ["",[Validators.required]],
          telefono_movil : ["",[Validators.required]],
          correo : ["",[Validators.required]],
          comite : [1]
        }),
        this.fb.group({
          nombre : ["",[Validators.required]],
          apellido : ["",[Validators.required]],
          puesto : ["",[Validators.required]],
          profesion : ["",[Validators.required]],
          telefono_oficina : ["",[Validators.required]],
          telefono_movil : ["",[Validators.required]],
          correo : ["",[Validators.required]],
          comite : [2]
        }),
        this.fb.group({
          nombre : ["",[Validators.required]],
          apellido : ["",[Validators.required]],
          puesto : ["",[Validators.required]],
          profesion : ["",[Validators.required]],
          telefono_oficina : ["",[Validators.required]],
          telefono_movil : ["",[Validators.required]],
          correo : ["",[Validators.required]],
          comite : [3]
        }),
        this.fb.group({
          nombre : ["",[Validators.required]],
          apellido : ["",[Validators.required]],
          puesto : ["",[Validators.required]],
          profesion : ["",[Validators.required]],
          telefono_oficina : ["",[Validators.required]],
          telefono_movil : ["",[Validators.required]],
          correo : ["",[Validators.required]],
          comite : [4]
        }),
        this.fb.group({
          nombre : ["",[Validators.required]],
          apellido : ["",[Validators.required]],
          puesto : ["",[Validators.required]],
          profesion : ["",[Validators.required]],
          telefono_oficina : ["",[Validators.required]],
          telefono_movil : ["",[Validators.required]],
          correo : ["",[Validators.required]],
          comite : [5]
        }),
        this.fb.group({
          nombre : ["",[Validators.required]],
          apellido : ["",[Validators.required]],
          puesto : ["",[Validators.required]],
          profesion : ["",[Validators.required]],
          telefono_oficina : ["",[Validators.required]],
          telefono_movil : ["",[Validators.required]],
          correo : ["",[Validators.required]],
          comite : [6]
        }),
        this.fb.group({
          nombre : ["",[Validators.required]],
          apellido : ["",[Validators.required]],
          puesto : ["",[Validators.required]],
          profesion : ["",[Validators.required]],
          telefono_oficina : ["",[Validators.required]],
          telefono_movil : ["",[Validators.required]],
          correo : ["",[Validators.required]],
          comite : [7]
        }),
        this.fb.group({
          nombre : ["",[Validators.required]],
          apellido : ["",[Validators.required]],
          puesto : ["",[Validators.required]],
          profesion : ["",[Validators.required]],
          telefono_oficina : ["",[Validators.required]],
          telefono_movil : ["",[Validators.required]],
          correo : ["",[Validators.required]],
          comite : [8]
        })
      ]),
      tipo_negocio : ["",[Validators.required]],
      cadena_prodictiva : ["",[Validators.required]],
      numero_empleados : ["",[Validators.required]],
      facturacion_anual : ["",[Validators.required]],
      proyecto_sectorAlim:["",[Validators.required]],

    });
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
  get getResponsablesCluster(){
    return this.formRegistro!.controls['responsables_cluster'] as FormArray;
  }
  get getResponsablesComite(){
    return this.formRegistro!.controls['responsables_comite'] as FormArray;
  }
}
