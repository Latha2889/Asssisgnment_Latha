import { Component } from '@angular/core';

import { MatDialog, MatDialogRef } from '@angular/material';

import { Event } from './event';
import { EventDialogComponent } from './event-dialog/event-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   events: Array<Event>;

   constructor(private eventDialog: MatDialog) { }

   openDialog(): void {
     const event = new Event();

     // open the dialog
     const dialogRef = this.eventDialog.open(EventDialogComponent, {
     	data: event
     });
   }

   refresh() {
   	// update the list of events
   	console.log("Refreshing");
   }

   update(event: Event) {
   	// update an event
   	console.log("Updating event: " + JSON.stringify(event));
   }

   create(event: Event) {
   	// create an event
   	console.log("Creating event: " + JSON.stringify(event));

   	// refresh the list
   	this.refresh();
   }
}
