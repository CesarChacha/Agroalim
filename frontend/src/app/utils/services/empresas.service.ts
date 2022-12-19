import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap, map } from 'rxjs';
import { environment as env } from '../../../environments/environment';
import { empresas } from '../interfaces/empresas.interface';
import { saveAs } from 'file-saver';


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

  saveEmpresa(formData:any):Observable<empresas | null>{
    return this.http.post<empresas | null>(`${env.api('empresas')}`, formData);
  }
  saveRequisitos(formData:any, id:number){
    return this.http.post<empresas | null>(`${env.api(`requisitos/${id}`)}`, formData);
  }

  getEmpresa(id:number){
    return this.http.get<any>(`${env.api(`empresa/${id}`)}`);
  }

  getResponsablesCluster(id:number){
    return this.http.get<any[]>(`${env.api(`responsablecluster/${id}`)}`);
  }

  getResponsablesComites(id:number){
    return this.http.get<any[]>(`${env.api(`responsablescomites/${id}`)}`);
  }

  getEmpresaCadenaProductiva(id:number){
    return this.http.get<any[]>(`${env.api(`empresaCadenaProductiva/${id}`)}`);
  }

  getEmpresaNorma(id:number){
    return this.http.get<any[]>(`${env.api(`empresaNorma/${id}`)}`);
  }

  getEmpresaTema(id:number){
    return this.http.get<any[]>(`${env.api(`empresaTema/${id}`)}`);
  }

  getRequisitos(id:number){
    return this.http.get<any[]>(`${env.api(`requisitos/${id}`)}`);
  }

  setAceptada(data:any){
    return this.http.put<any>(`${env.api(`empresaAceptar`)}`,data);
  }

  setRechazada(data:any){
    return this.http.put<any>(`${env.api(`empresaRechazar`)}`,data);
  }


  downloadItem(url:string, file_name:string, mediaType:string){
    url = env.fileServer+url.substring(url.lastIndexOf('\\')).replace('\\','/');
    window.open(url, '_blank');

    /*this.http.get(url, { responseType: 'blob' }).subscribe(
        (response) => {
            console.log('Response',response)
            var blob = new Blob([response], { type: mediaType });
            console.log(blob.size);
            saveAs(blob, `${file_name}`);
        },
        e => { console.log(e) }
    );*/
  }
  /**
   * Deshabilitado para descargar con fileSaver y habilitado para que se descarge mediante acceso directo al server
   */

  getFile(url: string, file_name: string, mediaType: string){
    url = 'http://54.234.60.110:8080/Files/BodyPart_77e6f5a5-c812-4454-8f34-21a5c0200dd7'//env.fileServer+url.substring(url.lastIndexOf('\\')).replace('\\','/');
    console.log(url)
    this.http.get(url, { responseType: 'blob' }).pipe(
      tap( fileBlob => {
        const blob = new Blob([fileBlob], { type : mediaType });
        saveAs(blob, file_name);
      }),
      map(() => true)
    ).subscribe();
  }

  disableEmpresa(data:any){
    return this.http.put<empresas>(`${env.api('disable_empresa')}`, data);
  }

  existsRfc(rfc: string){
    return this.http.get<boolean>(`${env.api('existe_rfc')}?rfc=${rfc}`);
  }

  existsCodigo(code: string){
    return this.http.get<boolean>(`${env.api('existe_codigo')}?code=${code}`);
  }
}
