import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { VagonComponent } from './vagon-form/vagon-form.component';
import {CarriageService} from './carriage.service';


@NgModule({
  declarations: [
    AppComponent,
    VagonComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule
  ],
  providers: [CarriageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
