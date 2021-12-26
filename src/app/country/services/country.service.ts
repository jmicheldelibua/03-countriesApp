import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/county-interfaces';


@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private apiUrl: string = 'https://restcountries.com/v3.1';
  
  constructor( private http: HttpClient) { }

  searchCountryByName( term: string) : Observable<Country[]>
  {
    const url: string = `${this.apiUrl}/name/${ term }`;
    return this.http.get<Country[]>( url );
  }

  searchCountryByCapital( term: string) : Observable<Country[]>
  {
    const url: string = `${this.apiUrl}/capital/${ term }`;
    return this.http.get<Country[]>( url );
  }

}
