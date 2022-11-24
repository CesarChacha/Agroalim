import { Component, OnInit } from '@angular/core';
import { metrica } from '../utils/interfaces/metricas.interface';
import { AuthService } from '../utils/services/auth.service';
import { DashboardServiceService } from '../utils/services/dashboard-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private sAuth: AuthService,
    private sDasboard: DashboardServiceService
  ) { }

  metricas:metrica = {
    aceptadas : 0,
    indice_aceptacion : 0,
    pendientes : 0,
    rechazadas : 0,
    totales : 0
  };
  userName:string = 'Name Apellido';

  ngOnInit(): void {
    this.userName = `${this.sAuth.getSession().nombre} ${this.sAuth.getSession().apellido}`
    this.getMetricas();
  }

  getMetricas(){
    this.sDasboard.getMetricas().subscribe(
      res => {
        console.log(res)
        this.metricas = res;
      }
    )
  }

}
