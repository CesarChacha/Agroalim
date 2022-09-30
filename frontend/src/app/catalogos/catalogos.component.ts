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
    { nombre : "Puestos", nombre_tabla : "puestos", nombre_pk : "id_puesto", endpoint : "puestos/"},
    { nombre : "Profesiónes", nombre_tabla : "profesiones", nombre_pk : "id_profesion", endpoint : "profesiones/"},
    { nombre : "Normas", nombre_tabla : "normas", nombre_pk : "id_norma", endpoint : "normas/"},
    { nombre : "Comités", nombre_tabla : "comites", nombre_pk : "id_comite", endpoint : "comites/"},
    { nombre : "Facturación anual", nombre_tabla : "facturacion", nombre_pk : "id_factuacion", endpoint : "facturacion/"},
    { nombre : "Actividades", nombre_tabla : "actividades", nombre_pk : "id_actividad", endpoint : "actividades/"},
    { nombre : "Temas", nombre_tabla : "temas", nombre_pk : "id_tema", endpoint : "temas/"},
    { nombre : "Organizaciones", nombre_tabla : "organizaciones", nombre_pk : "id_organizacion", endpoint : "organizacion/"},
  ]

  ngOnInit(): void {
  }

}
