import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [
  ]
})
export class ByCountryComponent{
  
  term : string = '';
  thereError: boolean = false;

  constructor( private countryService: CountryService) { }

  search()
  {
    console.log(this.term);
    this.thereError = false;
    this.countryService.searchCountry(this.term)
    .subscribe( 
      response => {
        console.log(response);
      },
      error =>{
        this.thereError = true;
      });
  }
}
