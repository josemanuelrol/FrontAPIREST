import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Credentials } from '../modelo/credentials';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  url = "http://localhost:8080/login"

  constructor(private http:HttpClient, private router:Router, private cookie:CookieService) { }

  login(creds:Credentials){
    return this.http.post(this.url,creds, {
      observe: 'response'
    }).pipe(map((response: HttpResponse<any>) => {
      const body = response.body;
      const headers= response.headers;
      const bearerToken = headers.get('Authorization')!;
      const token = bearerToken.replace('Bearer ','');

      this.cookie.set('token', token);

      return body;
    }))
  };

  getToken(){
    return this.cookie.get('token');
  }

  logout(){
    this.cookie.delete('token');
    this.router.navigate(['/login'])
  }
}
