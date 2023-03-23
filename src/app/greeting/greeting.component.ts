import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonalService } from '../personal.service';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.css']
})
export class GreetingComponent {

  name: string = 'there';
  message: string = 'Lets start!!';

  constructor(private service: PersonalService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    if(this.service.getdata() != null && this.route.snapshot.component?.name != 'PersonalComponent') {
      this.name = this.service.getdata()?.name;
    }
    if(this.route.snapshot.component?.name == 'PersonalComponent') {
      this.name = 'there';
    }
    
    if(this.route.snapshot.component?.name == 'AddressComponent') {
      this.message = 'almost there!!';
    }
    
    console.log(this.route.snapshot.component?.name);
  }

  receiveData(data: string) {
    this.name = data;
    console.log('in greeting component receive data');
    console.log(this.name);
  }

}
