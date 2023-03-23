import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonalService } from '../personal.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent {

  //fix it so it works
  street: string = '';
  city: string = '';
  selectedState: string = '';
  states = ['CA', 'MD', 'OH', 'VA'];
  name: string = '';
  age: number = 0;

  //call service

  constructor(private router: Router, 
              private personalService: PersonalService, 
              private route: ActivatedRoute) { 
                  this.name = this.personalService.getdata().name;
                  this.age = this.personalService.getdata().age;
              }
  
  saveDataAndNavigate() {
    console.log(this.personalService.getdata().name);
    this.personalService.processdata({name: this.name, age: this.age, street: this.street, city: this.city, selectedState: this.selectedState});
    this.router.navigate(['final']);

  }
}
