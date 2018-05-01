import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import {MyAppService} from './app.service';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { FormsModule }   from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    CommonModule
  ],
  providers: [MyAppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
