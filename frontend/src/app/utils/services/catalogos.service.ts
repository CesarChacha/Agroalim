import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { actividad, comite, facturacion, norma, organizacion, profesion, puesto, tema } from '../interfaces/catalogs.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatalogosService {

  constructor(
    private http: HttpClient
  ) { }

  getCatalogNotBaja(endpoint: string): Observable<puesto[] | profesion[] | norma[] | comite[] | facturacion[] | actividad[] | tema[] | organizacion[]>{
    return this.http.get<puesto[] | profesion[] | norma[] | comite[] | facturacion[] | actividad[] | tema[] | organizacion[]>(`${endpoint}get`,{});
  }

}
