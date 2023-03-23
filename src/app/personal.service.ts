import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonalService {
  
    private data: any;
    constructor() { }

    setData(data: any) {
      this.data = data;
      console.log('data set');
    }

    getdata() {
        return this.data;
    }

    processdata(data: any) {
    console.log(data);
    
    //call to db
    console.log('data sent to db');
    }
}
