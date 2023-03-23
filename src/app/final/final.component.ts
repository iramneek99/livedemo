import { Component } from '@angular/core';
import { PersonalService } from '../personal.service';

@Component({
  selector: 'app-final',
  templateUrl: './final.component.html',
  styleUrls: ['./final.component.css']
})
export class FinalComponent {
  name: string = '';
  constructor(private service: PersonalService) { }

  ngOnInit(): void {
    console.log(this.service.getdata());
    this.name = this.service.getdata().name;
  }

}
