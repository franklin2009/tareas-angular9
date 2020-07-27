import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { ITarea } from '../interface/tarea';

@Injectable({
  providedIn: 'root'
})

export class TareaService {

  apiUrl: string = 'http://localhost/tarea/public/api/v1';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  all() {
    return this.http.get(`${this.apiUrl}/tareas`);
  }

  add(data:ITarea){
    let API_URL = `${this.apiUrl}/tareas`;
    return this.http.post(API_URL, data, { headers: this.headers }).pipe(catchError(this.error));
  }

  update(id:number,data:ITarea) {
    let API_URL = `${this.apiUrl}/tareas/${id}`;
    return this.http.put(API_URL, data, { headers: this.headers }).pipe(catchError(this.error));
  }

  updateFecha(id:number,data:ITarea) {
    let API_URL = `${this.apiUrl}/tareas/fecha/${id}`;
    return this.http.put(API_URL, data, { headers: this.headers }).pipe(catchError(this.error));
  }

  delete(id:number) {
    var API_URL = `${this.apiUrl}/tareas/${id}`;
    return this.http.delete(API_URL).pipe(catchError(this.error));
  }

  error(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}