import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/county-interfaces';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [
    `
      li{
        cursor: pointer;
      }
    `
  ]
})
export class ByCountryComponent{
  
  term : string = '';
  thereError: boolean = false;
  countries: Country[] = [];
  suggestedCountries: Country[] = [];
  showSuggestions: boolean = false;

  get isValidTerm(){
    return this.term.trim().length;
  }

  constructor( private countryService: CountryService) { }

  search( term: string)
  {

    this.thereError = false;
    this.term = term;
    this.showSuggestions = false;

    if(!this.isValidTerm){ return; }

    this.countryService.searchCountryByName( term )
    .subscribe( 
      countries => {
        this.countries = countries;
      },
      error => {
        this.thereError = true;
        this.countries = [];
      });
  }

  suggestions( term: string)
  {
    this.thereError = false;
    this.showSuggestions = true;
    this.term = term;
    
    if(!this.isValidTerm){ return; }

    this.countryService.searchCountryByName( term )
    .subscribe( 
      countries => this.suggestedCountries = countries.splice(0,5),
      error     => this.suggestedCountries = []
      );
  }
}
