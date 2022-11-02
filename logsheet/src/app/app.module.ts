import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InlineEditingComponent } from './inline-editing/inline-editing.component';
import { ExceldownloadComponent } from './exceldownload/exceldownload.component';

@NgModule({
  declarations: [
    AppComponent,
    InlineEditingComponent,
    ExceldownloadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
