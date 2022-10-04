import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.css']
})
export class SolicitudComponent implements OnInit {

  constructor(
    private ar:ActivatedRoute
  ) { }

  id_empresa: number = 0;
  rfc: string = '';

  ngOnInit(): void {
    this.id_empresa = this.ar.snapshot.params['id_empresa'];
    this.rfc = this.ar.snapshot.params['rfc'];
    console.log("Id Empresa", this.id_empresa, !isNaN(this.id_empresa))
    console.log("RFC", this.rfc, (typeof this.rfc === 'string'))
  }

}
