import { Component,OnInit } from '@angular/core';
import {of} from 'rxjs'
import {map, tap, take} from 'rxjs/operators'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  name = 'Angular';

  ngOnInit(){
    of(2,3,6,8)
    .pipe(
        tap(item=>console.log('print: ' + item)),
        map(item=>item*2),
        tap(item=>console.log('print: ' + item)),
        map(item=>item-3),
        tap(item=>console.log('print: ' + item)),
    )
    .subscribe(console.log);


    of(2,3,6,8)
    .pipe(
        map(item=>item*2),
        take(2),
    )
    .subscribe(console.log);

  }
}
