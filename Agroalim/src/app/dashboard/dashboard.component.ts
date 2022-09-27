import { Component, OnInit } from '@angular/core';
import { AuthService } from '../utils/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private sAuth: AuthService
  ) { }

  userName:string = 'Name Apellido';

  ngOnInit(): void {
    this.userName = `${this.sAuth.getSession().nombre} ${this.sAuth.getSession().apellido}`
  }

}
