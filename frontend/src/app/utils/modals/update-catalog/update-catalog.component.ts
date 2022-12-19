import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-update-catalog',
  templateUrl: './update-catalog.component.html',
  styleUrls: ['./update-catalog.component.css']
})
export class UpdateCatalogComponent implements OnInit {

  task:string = "";

  constructor(
    public dialogRef: MatDialogRef<UpdateCatalogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.data.res = data.data.nombre;
  }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
