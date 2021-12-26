import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-country-input',
  templateUrl: './country-input.component.html',
  styleUrls: ['./country-input.component.css']
})
export class CountryInputComponent implements OnInit {

  @Input() placeholder: string = 'Type something';
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() OnDebounce: EventEmitter<string> = new EventEmitter();
  
  
  Debounce : Subject<string> = new Subject(); 

  term: string = '';

  ngOnInit(): void {
      this.Debounce
      .pipe( debounceTime(300))
      .subscribe( value =>{
          this.OnDebounce.emit( value );
      });
  }
  search(){
    this.onEnter.emit( this.term );
  }

  pressedKey( event: any )
  {
    const term = event.target.value;

    // this.Debounce.next( this.term );
    this.Debounce.next( term );
  }
}

