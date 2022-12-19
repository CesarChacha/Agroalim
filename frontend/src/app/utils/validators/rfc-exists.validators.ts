import { AbstractControl } from "@angular/forms";
import { EmpresasService } from "../services/empresas.service";
import { regex as rgx } from "./../regex/regrex.const";
import { map } from "rxjs";
export class RfcExistsValidator {

    constructor(){
    }

    /*
    static exists(control: AbstractControl){
        const value = control.value;
        // TODO: hacer validador
        console.log(value);
        if(rgx.rfc.test(value)){
            this.eService.existsRfc(value)
            .subscribe(
                res => {
                    return res? { exists : true}: null;
                },
                err => {
                    return null;
                }
            )
        }
    }
    */

    static exists(eService: EmpresasService){
        return (control: AbstractControl) => {
            const value = control.value;
            if(rgx.rfc.test(value)){
                return eService.existsRfc(value)
                .pipe(
                    map( (res:boolean) => {
                        return res? { exists : true}: null;
                    })
                );
            }
            return null;

        }
    }
}