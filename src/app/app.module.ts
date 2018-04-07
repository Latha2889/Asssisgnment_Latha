import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FlexLayoutModule } from '@angular/flex-layout';

import { MatCardModule,
	     MatIconModule,
	     MatToolbarModule,
       MatDialogModule } from '@angular/material';
import { EventDialogComponent } from './event-dialog/event-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    EventDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatDialogModule
  ],
  entryComponents: [
    EventDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
