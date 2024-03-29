import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PeriodicElement } from 'src/app/models/periodicElement';

@Component({
  selector: 'app-element-dialog',
  templateUrl: './element-dialog.component.html',
  styleUrls: ['./element-dialog.component.scss']
})
export class ElementDialogComponent implements OnInit {
  element!: PeriodicElement;
  isChange!: boolean;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: PeriodicElement,
    public dialogRef: MatDialogRef<ElementDialogComponent>,

  ) {}

  ngOnInit(): void {
    if(this.data.position != null){
      this.isChange = true;
    } else{
      this.isChange = false;
    }
  }

  Cancel(): void {
    this.dialogRef.close();
  }

}
