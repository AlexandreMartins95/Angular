import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PeriodicElement } from 'src/app/views/home/home.component';

@Component({
  selector: 'app-element-dialog',
  templateUrl: './element-dialog.component.html',
  styleUrls: ['./element-dialog.component.scss']
})
export class ElementDialogComponent implements OnInit {
  element!: PeriodicElement;
  change!: boolean;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: PeriodicElement,
    public dialogRef: MatDialogRef<ElementDialogComponent>,

  ) {}

  ngOnInit(): void {
    if(this.data.position != null){
      this.change = true;
    } else{
      this.change = false;
    }
  }

  Cancel(): void {
    this.dialogRef.close();
  }

}
