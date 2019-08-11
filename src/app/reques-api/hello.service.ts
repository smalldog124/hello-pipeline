import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { HelloMessage } from './hello-message';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HelloService {
  host = 'http://localhost:3000'
  constructor(private http: HttpClient) { }

  getHello(): Observable<HelloMessage> {
    return this.http.get<HelloMessage>(this.host + '/hello').pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  // Error handling
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client side error
      errorMessage = error.error.message;
    } else {
      // Get server side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
