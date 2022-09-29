import { Component, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { AuthService } from './utils/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Agroalim';
  showFiller = false;
  itsAuthenticated: boolean = false;
  @ViewChild('drawer') drawer!: MatDrawer;

  constructor(
    private sAuth: AuthService,
    private rt: Router
  ){
    this.itsAuthenticated = this.sAuth.isLoged();
  }

  public closeSession(){
    this.sAuth.destroySession();
    this.itsAuthenticated = false;
    this.drawer.close();
    this.rt.navigateByUrl('login');
  }

  public toggleDrawer(){
    this.itsAuthenticated = this.sAuth.isLoged();
    this.drawer.toggle();
  }

}
