import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(
    private _snackBar: MatSnackBar
  ) { }

  printMessage(message: string, action?:string, durationInSeconds: number = 5){
    this._snackBar.open(message, action,{
      duration : (durationInSeconds*1000)
    })
  }
}
