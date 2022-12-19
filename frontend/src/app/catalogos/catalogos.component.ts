import { Component, OnInit } from '@angular/core';
import { catalogo } from '../utils/interfaces/catalogs.interface';

@Component({
  selector: 'app-catalogos',
  templateUrl: './catalogos.component.html',
  styleUrls: ['./catalogos.component.css']
})
export class CatalogosComponent implements OnInit {

  constructor() { }

  /*
  Puesto, Profesion, Norma, Comité, Facturación, Actividad, Tema, Organización
  */
  catalogos: catalogo[] = [
    { nombre : "Puestos", nombre_tabla : "puestos", nombre_pk : "id_puesto", endpoint : "puestos_adm"},
    { nombre : "Profesiónes", nombre_tabla : "profesiones", nombre_pk : "id_profesion", endpoint : "profesiones_adm"},
    { nombre : "Normas", nombre_tabla : "normas", nombre_pk : "id_norma", endpoint : "normas_adm"},
    { nombre : "Comités", nombre_tabla : "comites", nombre_pk : "id_comite", endpoint : "comites_adm"},
    { nombre : "Facturación anual", nombre_tabla : "facturacion", nombre_pk : "id_factuacion", endpoint : "facturacion_adm"},
    { nombre : "Cadena productiva", nombre_tabla : "cadena_productiva", nombre_pk : "id_cadena_productiva", endpoint : "cadena_productiva_adm"},
    { nombre : "Temas", nombre_tabla : "temas", nombre_pk : "id_tema", endpoint : "temas_adm"},
    { nombre : "Organizaciones", nombre_tabla : "organizaciones", nombre_pk : "id_organizacion", endpoint : "organizaciones_adm"},
    { nombre : "Causas baja", nombre_tabla : "causas_baja", nombre_pk : "id_causa_baja", endpoint : "causas_baja_adm"},
  ]

  ngOnInit(): void {
  }

}