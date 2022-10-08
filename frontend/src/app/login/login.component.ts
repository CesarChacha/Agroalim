import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../utils/services/auth.service';
import { SnackbarService } from '../utils/services/snackbar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private sAuth: AuthService,
    private sSnkBar: SnackbarService,
    private rt: Router
  ) { }

  loginForm!: FormGroup;
  onErrorMessage: string = "";
  loading:boolean = false;

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.loginForm = this.fb.group({
      user : ["", [Validators.required]],
      password : ["", [Validators.required]],
      token: ["",[]],
      nombre: ["",[]],
      apellido: ["",[]]
    })
  }

  initSession(){
    this.loading = true;
    this.sAuth.login(this.loginForm.value).subscribe(
      res => {
        if(res){
          this.sAuth.saveSession(res);
          this.sSnkBar.printMessage(`¡Bienvenid@ ${res.nombre}!`, '¡Ok!')
          this.rt.navigateByUrl('home')
        }else{
          this.onErrorMessage = "Credenciales inválidas."
          this.sSnkBar.printMessage(this.onErrorMessage, '¡Ok!')
        }
        this.loading = false;
      },
      err => {
        this.onErrorMessage = "Servidor no disponible."
        this.sSnkBar.printMessage(this.onErrorMessage, '¡Ok!')
        console.error(err)
        this.loading = false;
      }
    );
  }

}
