import { Component } from '@angular/core';
import { Country } from '../../interfaces/county-interfaces';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
  styles: [
  ]
})
export class ByCapitalComponent  {

  term : string = '';
  thereError: boolean = false;
  countries: Country[] = [];

  constructor( private countryService: CountryService) { }

  search( term: string)
  {
    this.thereError = false;
    this.term = term;

    this.countryService.searchCountryByCapital( term )
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
