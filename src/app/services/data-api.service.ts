import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Libro } from '../modelo/libro';

@Injectable({
  providedIn: 'root'
})
export class DataAPIService {

  url = "http://localhost:8080/libro"

  constructor(private http:HttpClient) { }

  findAll():Observable<Libro[]>{
    return this.http.get<Libro[]>(this.url);
  }

  findByIsbn(isbn:number):Observable<Libro>{
    return this.http.get<Libro>(`${this.url}/${isbn}`);
  }

  createLibro(libro:Libro):Observable<Libro>{
    return this.http.post<Libro>(this.url,libro);
  }

  updateLibro(isbn:number, libro:Libro):Observable<Libro>{
    return this.http.put<Libro>(`${this.url}/${isbn}`, libro);
  }

  deleteLibro(isbn:number):Observable<Libro>{
    return this.http.delete<Libro>(`${this.url}/${isbn}`);
  }

}
