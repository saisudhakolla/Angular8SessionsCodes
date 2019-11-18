import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {catchError,finalize} from 'rxjs/operators'
import {of,throwError} from 'rxjs';

@Component({
  selector: 'err-cmp',
  templateUrl: './error-dems.component.html',
  styleUrls: ['./error-dems.component.css']
})
export class ErrorDemsComponent implements OnInit {

  constructor(private http: HttpClient) {}

  ngOnInit() {
   
  /*
   //const http$ = this.http.get('assets/friends.json'); 
    const http$ = this.http.get('assets/friends1.json'); 

    http$.subscribe(
        res => console.log('HTTP response', res),
        err => console.log('HTTP Error', err),
        () => console.log('HTTP request completed.')
    );
     

*/

/*
   const http$ = this.http.get('assets/friends1.json'); 

   http$
       .pipe(
           catchError(err => of([]))
       )
       .subscribe(
           res => console.log('HTTP response', res),
           err => console.log('HTTP Error', err),
           () => console.log('HTTP request completed.')
       );
   
 */


//catch and rethrow
 
const http$ = this.http.get('assets/friends1.json');
http$
    .pipe(
        catchError(err => {
            console.log('Handling error locally and rethrowing it...', err);
            return throwError(err);
        }),
        finalize(() => console.log("first finalize() block executed")),
    )
    .subscribe(
        res => console.log('HTTP response', res),
        err => console.log('HTTP Error', err),
        () => console.log('HTTP request completed.')
    );
 
}

}
