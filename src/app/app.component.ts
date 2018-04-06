import { Component } from '@angular/core';

import { Event } from './event';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   events: Array<Event>;

   refresh() {
   	// update the list of events
   }

   update(event: Event) {
   	// update an event
   }

   create(event: Event) {
   	// create an event

   	//refresh the list
   	this.refresh();
   }
}
