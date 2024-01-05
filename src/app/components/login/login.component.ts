import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Credentials } from 'src/app/modelo/credentials';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  creds:Credentials = {
    email: '',
    password: '',
  };

  constructor(private apiService:ApiServiceService, private router:Router){}

  login(form:NgForm){
    console.log('form value', form.value);

    this.apiService.login(this.creds).subscribe(response => {
      this.router.navigate(['home']);
    })
  }

}
