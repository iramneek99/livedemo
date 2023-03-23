import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonalService } from './personal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  message = ' Lets start!!' 
  name: string = '';

  //call service
  constructor(private route: ActivatedRoute, private service: PersonalService) { 
  }

  //read router value

  ngOnInit() {
    this.getData();
  }

  receiveData(data: string) {
    this.name = data;
    
  }

  getData() { 
    this.name = this.service.getdata()?.name;
    console.log('in app component receive data');
    console.log(this.name);

  }
}
