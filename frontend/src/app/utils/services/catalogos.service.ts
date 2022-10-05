import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { actividad, comite, facturacion, norma, organizacion, profesion, puesto, tema } from '../interfaces/catalogs.interface';
import { Observable } from 'rxjs';
import { environment as env } from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CatalogosService {

  constructor(
    private http: HttpClient
  ) { }

  getCatalog(endpoint: string): Observable<puesto[] | profesion[] | norma[] | comite[] | facturacion[] | actividad[] | tema[] | organizacion[]>{
    return this.http.get<puesto[] | profesion[] | norma[] | comite[] | facturacion[] | actividad[] | tema[] | organizacion[]>(`${env.api(endpoint)}`,{});
  }

  addCatalog(endpoint: string, nombre: string):Observable<any>{
    return this.http.post<any>(`${env.api(endpoint)}?nombre=${nombre}`, {});
  }

  updateCatalog(endpoint: string, data: any):Observable<any>{
    return this.http.put<any>(`${env.api(endpoint)}`, data);
  }

}
