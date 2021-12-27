import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../../services/country.service';
import { switchMap, tap } from 'rxjs/operators';
import { Country } from '../../interfaces/county-interfaces';

@Component({
  selector: 'app-show-country',
  templateUrl: './show-country.component.html',
  styles: [
  ]
})
export class ShowCountryComponent implements OnInit {

  // country: Country | undefined;
  country!: Country;

  constructor( 
    private activatedRuote: ActivatedRoute, 
    private countryService: CountryService
    ) { }

  ngOnInit(): void {
    //NEW METHOD
    this.activatedRuote.params
    .pipe(
      switchMap( ({ id }) => this.countryService.searchCountryByFifaCode( id ) )
      //, tap( console.log ) // SAME <=> , tap( resp => console.log( resp ) ) //For this case , tap( resp => console.log( resp.shift()  ) )
    )
    .subscribe( country => this.country = country.shift()! );
    
    /* OLD METHOD
      this.activatedRuote.params
      // .subscribe( (params) =>{
        .subscribe( ({ id }) =>{
        console.log(id);

        this.countryService.searchCountryByFifaCode( id )
        .subscribe( country =>{
            console.log(country);
        })
      });
    */
  }

}
