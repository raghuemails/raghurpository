import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CardsComponent } from './cards.component';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    CardsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [CardsComponent]
})
export class AppModule { }