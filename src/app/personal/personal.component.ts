import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { PersonalService } from '../personal.service';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent {

  name: string = '';
  age: number = 0;
  @Output() dataEvent = new EventEmitter<string>();
  /**
   *
   */
  constructor(private route: ActivatedRoute, private router: Router, private personalService: PersonalService) { 
    console.log('I am Personal   called');
  }

  ngOnInit() {
    this.name = this.route.snapshot.data['name'];
    console.log(this.name);
  }

  

  sendData() {
    this.dataEvent.emit(this.name);
    this.personalService.setData({name: this.name, age: this.age});
    this.router.navigate(['address'], {relativeTo: this.route});
  }

 }


