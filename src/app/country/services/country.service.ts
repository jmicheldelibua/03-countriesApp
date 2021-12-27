import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/county-interfaces';


@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private apiUrl: string = 'https://restcountries.com/v3.1';
  
  constructor( private http: HttpClient) { }

  get httpParams()
  {
    return new HttpParams().set('fields','flags,name,population,fifa,capital');
  }
  searchCountryByName( term: string) : Observable<Country[]>
  {
    const url: string = `${this.apiUrl}/name/${ term }`;
    return this.http.get<Country[]>( url, { params: this.httpParams} );
  }

  searchCountryByCapital( term: string) : Observable<Country[]>
  {
    const url: string = `${this.apiUrl}/capital/${ term }`;
    return this.http.get<Country[]>( url, { params: this.httpParams} );
  }

  searchCountryByFifaCode( fifaCode: string) : Observable<Country>
  {
    const url: string = `${this.apiUrl}/alpha/${ fifaCode }`;
    return this.http.get<Country>( url );
  }

  searchCountryByRegion( region: string) : Observable<Country[]>
  {
    const url: string = `${this.apiUrl}/region/${ region }`;
    return this.http.get<Country[]>( url, { params: this.httpParams} );
  }

}
