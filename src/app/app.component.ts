import { Component, Injectable } from '@angular/core';

import { MatDialog, MatDialogRef } from '@angular/material';

import { HttpClient } from '@angular/common/http';

import { Event } from './event';
import { EventDialogComponent } from './event-dialog/event-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   events: Array<Event>;

   constructor(private eventDialog: MatDialog,
   	           private http: HttpClient) { 
   	  this.events = new Array<Event>();
   	  this.refresh();
   }

   openDialog(): void {
     const event = new Event();

     // open the dialog
     const dialogRef = this.eventDialog.open(EventDialogComponent, {
     	data: event
     });

     dialogRef.afterClosed().subscribe(result => {
     	if (result.id == null) {
     		this.create(result);
     	} else {
     		this.update(event);
     	}
     });
   }

   refresh() {
   	// update the list of events
   	console.log("Refreshing");
   	this.http.get<Array<Event>>("/event")
   	    .subscribe(data => this.events = data);
   }

   update(event: Event) {
   	// update an event
   	console.log("Updating event: " + JSON.stringify(event));
   }

   create(event: Event) {
   	// create an event and refresh the list
   	console.log("Creating event: " + JSON.stringify(event));
   	this.http.post("/event", event)
   	    .subscribe(data => this.refresh());
   }

   delete(id: number) {
   	 console.log("Deleting event: " + id);
   }
}
