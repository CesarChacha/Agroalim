import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardServiceService {

  constructor(
    private http: HttpClient
  ) { }

  getMetricas():Observable<any>{
    return this.http.get<any>(`${env.api('metricas')}`);
  }

}
