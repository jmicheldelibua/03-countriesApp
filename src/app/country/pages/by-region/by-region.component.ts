import { Component } from '@angular/core';
import { Country } from '../../interfaces/county-interfaces';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styles: [
    `
    button{
      margin-right: 5px;
    }
    `
  ]
})
export class ByRegionComponent{

  regions : string[] = [ 'africa', 'americas', 'asia', 'europe', 'oceania'];
  activeRegion: string = '';
  countries: Country[] = [];
  
  constructor( private countryService: CountryService) { }

  activateRegion( region: string)
  {
    if(region === this.activeRegion) { return; }

    this.countries = [];
    
    this.activeRegion = region;

    this.countryService.searchCountryByRegion( region )
    .subscribe( 
      countries => {
        this.countries = countries;
      },
      error =>{
        this.countries = [];
      });
  }

  getClassCSS(region: string ): string {
    return ( region === this.activeRegion ) ? 'btn btn-primary' : 'btn btn-outline-primary' ;
  }

}
