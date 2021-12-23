import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
 private apiUrl: string = 'https://restcountries.com/v3.1/name/united';
  constructor() { }
}
