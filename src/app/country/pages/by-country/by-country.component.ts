import { Component } from '@angular/core';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [
  ]
})
export class ByCountryComponent{
  
  term : string = 'Hi JMD';
  
  constructor() { }

  search()
  {
    console.log(this.term);
  }
}
