import { Component, Inject } from '@angular/core';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { Event } from '../event';

@Component({
  selector: 'app-event-dialog',
  templateUrl: './event-dialog.component.html',
  styleUrls: ['./event-dialog.component.css']
})
export class EventDialogComponent {

  constructor(public dialogRef: MatDialogRef<EventDialogComponent>,
  	@Inject(MAT_DIALOG_DATA) public event: Event) { }

  onNoClick(): void {
  	this.dialogRef.close();
  }

}
