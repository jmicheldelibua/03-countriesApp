import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/county-interfaces';

@Component({
  selector: 'app-country-table',
  templateUrl: './country-table.component.html',
  styleUrls: ['./country-table.component.css']
})
export class CountryTableComponent {

  @Input() countries : Country[] = [];
  constructor() { }
}
