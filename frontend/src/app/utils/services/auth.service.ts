import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from '../../../environments/environment';
import { administrador, auth } from '../interfaces/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private _ws:HttpClient
  ) { }

  public login(data:auth):Observable<auth>{
    return this._ws.post<auth>(env.api('login'),data);
  }

  public saveSession(res : any):void{
    sessionStorage.setItem('auth' ,JSON.stringify(res));
  }

  public destroySession(){
    sessionStorage.removeItem('auth');
  }

  public isLoged():boolean{
    return sessionStorage.getItem('auth')?.length?true:false;
  }

  public getSession():auth{
    return JSON.parse(sessionStorage.getItem('auth')!);
  }

  public getSysAdmin(id_administrador: number):Observable<administrador>{
    return this._ws.get<administrador>(env.api(`administrador/${id_administrador}`));
  }

  public updateSysAdmin(admin: administrador | any):Observable<administrador>{
    return this._ws.put<administrador>(env.api(`administrador`),admin);
  }

}
