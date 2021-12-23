import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private apiUrl: string = 'https://restcountries.com/v3.1';
  
  constructor( private http: HttpClient) { }

  searchCountry( term: string) : Observable<any>
  {
    const url: string = `${this.apiUrl}/name/${ term }`;
    return this.http.get( url );
  }
}
