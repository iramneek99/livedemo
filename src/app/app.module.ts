import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddressComponent } from './address/address.component';
import { PersonalComponent } from './personal/personal.component';
import { AppRoutingModule } from './app-routing.module';
import { FinalComponent } from './final/final.component';
import { GreetingComponent } from './greeting/greeting.component';

@NgModule({
  declarations: [
    AppComponent,
    AddressComponent,
    PersonalComponent,
    FinalComponent,
    GreetingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
