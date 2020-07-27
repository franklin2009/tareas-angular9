import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { IUsuario } from '../interface/usuario';

@Injectable({
  providedIn: 'root'
})

export class UsuarioService {

// API_KEY = 'YOUR_API_KEY';
  apiUrl: string = 'http://localhost/tarea/public/api/v1';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }
  
  
  all() {
    return this.http.get(`${this.apiUrl}/usuarios`);
  }

  add(data:IUsuario){
    let API_URL = `${this.apiUrl}/usuarios`;
    return this.http.post(API_URL, data, { headers: this.headers }).pipe(catchError(this.error));
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