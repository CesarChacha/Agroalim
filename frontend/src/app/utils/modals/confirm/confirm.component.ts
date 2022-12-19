import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent {

  task:string = "";
  message:string = "";

  constructor(
    public dialogRef: MatDialogRef<ConfirmComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { 
    
    switch (data.task) {
      case 'del':
        this.task = "Eliminar"
        this.message = `¿Eliminar permanentemente ${data.data.nombre}?`
        break;
      
      case 'upd':
        this.task = "Actualizar"
        this.message = `¿${data.data.activo?'Deshabilitar':'Habilitar'} el registro de ${data.data.nombre}?`
        break;
      
      case 'edit':
    
        break;
    
      default:
        break;
    }
  }

}
