import { AbstractControl } from "@angular/forms";
import { EmpresasService } from "../services/empresas.service";
import { map } from "rxjs";
export class CodigoEmpresaExistsValidator {

    constructor(
    ){

    }

    static exists(eService: EmpresasService){
        return (control: AbstractControl) => {
            const value = control.value;
                return eService.existsCodigo(value)
                .pipe(
                    map( (res:boolean) => {
                        return res? { exists : true}: null;
                    })
                );
        }
    }
}