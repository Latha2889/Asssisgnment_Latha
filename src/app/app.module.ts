import { NgModule } from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FlexLayoutModule } from '@angular/flex-layout';

import { FormsModule } from '@angular/forms';

import { MatCardModule,
	     MatIconModule,
	     MatToolbarModule,
       MatDialogModule,
       MatFormFieldModule,
       MatInputModule } from '@angular/material';
import { EventDialogComponent } from './event-dialog/event-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    EventDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FlexLayoutModule,
    FormsModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule
  ],
  entryComponents: [
    EventDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
