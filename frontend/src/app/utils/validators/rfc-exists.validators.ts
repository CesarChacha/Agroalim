import { AbstractControl } from "@angular/forms";
import { EmpresasService } from "../services/empresas.service";

export class RfcExistsValidator {

    constructor(
        private _eService: EmpresasService
    ){

    }

    static exists(control: AbstractControl){
        const value = control.value;
        // TODO: hacer validador
        console.log(value);
        return { exists : true}
        return null;
    }
}