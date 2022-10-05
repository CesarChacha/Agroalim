import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from '../../../environments/environment';
import { empresas } from '../interfaces/empresas.interface';

@Injectable({
  providedIn: 'root'
})
export class EmpresasService {

  constructor(
    private http: HttpClient
  ) { }

  getSolicitantes():Observable<empresas[]>{
    return this.http.get<empresas[]>(`${env.api('empresas_solicitantes')}`);
  }

  getEmpresas():Observable<empresas[]>{
    return this.http.get<empresas[]>(`${env.api('empresas')}`);
  }
}
