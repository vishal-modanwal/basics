import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmployeeCardComponent } from './employee-card/employee-card.component';
import { SvayamComponent } from './svayam/svayam.component';
import { VishalComponent } from './vishal/vishal.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeCardComponent,
    SvayamComponent,
    VishalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
