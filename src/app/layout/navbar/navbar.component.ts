import { Component } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private apiService: ApiServiceService){}

  logout(){
    this.apiService.logout();
  }

  estaLogueado(){
    return this.apiService.getToken();
  }

}
