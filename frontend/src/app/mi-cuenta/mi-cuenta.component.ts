import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { administrador } from '../utils/interfaces/auth.interface';
import { AuthService } from '../utils/services/auth.service';
import { SnackbarService } from '../utils/services/snackbar.service';

@Component({
  selector: 'app-mi-cuenta',
  templateUrl: './mi-cuenta.component.html',
  styleUrls: ['./mi-cuenta.component.css']
})
export class MiCuentaComponent implements OnInit {

  formUser!:FormGroup;
  showForm: boolean = false;
  constructor(
    private fb:FormBuilder,
    private sAuth: AuthService,
    private sSb: SnackbarService
  ) { }

  ngOnInit(): void {
    this.getAdminData();
  }

  initForm(admin: administrador): void {
    this.formUser = this.fb.group({
      id_administrador : [admin.id_administrador,[]],
      nombre : [admin.nombre,[Validators.required]],
      apellido : [admin.apellido,[Validators.required]],
      correo : [admin.correo,[Validators.required, Validators.email]],
      password : [admin.password,[Validators.required]],
    });

    this.showForm = true;
  }

  getAdminData(){
    let id_administrador = this.sAuth.getSession().id_administrador;

    this.sAuth.getSysAdmin(id_administrador).subscribe(
      res => this.initForm(res),
      err => this.sSb.printMessage("Ocurrio un error en la petición", "Ok!")
    );
  }

  save(){
    this.sAuth.updateSysAdmin(this.formUser.value).subscribe(
      res => {
        this.sAuth.saveSession(res);
        this.sSb.printMessage("Usuario actualizado correctamente!", 'Ok!')
      },
      err => this.sSb.printMessage("Ocurrio un error en la petición", "Ok!")
    );
  }

}
