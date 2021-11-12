import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Botao1Component } from './botao1/botao1.component';
import { Botao2Component } from './botao2/botao2.component';
import { SearchBarComponent } from './searchbar/searchbar.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    Botao1Component,
    Botao2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
