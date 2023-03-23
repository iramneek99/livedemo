import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PersonalComponent } from './personal/personal.component';
import { AddressComponent } from './address/address.component';
import { FinalComponent } from './final/final.component';


const routes: Routes = [
  { path: '', component: PersonalComponent },
  { path: 'personal', component: PersonalComponent },
  {path: 'address', component: AddressComponent},
  {path: 'final', component: FinalComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]    
})
export class AppRoutingModule { }
