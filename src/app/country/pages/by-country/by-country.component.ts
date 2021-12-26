import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/county-interfaces';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [
  ]
})
export class ByCountryComponent{
  
  term : string = '';
  thereError: boolean = false;
  countries: Country[] = [];

  constructor( private countryService: CountryService) { }

  search( term: string)
  {
    this.thereError = false;
    this.term = term;

    this.countryService.searchCountryByName( term )
    .subscribe( 
      countries => {
        this.countries = countries;
      },
      error =>{
        this.thereError = true;
        this.countries = [];
      });
  }

  suggestions( term: string)
  {
    this.thereError = false;
  }
}
