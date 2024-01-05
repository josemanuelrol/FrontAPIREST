import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AddLibroComponent } from './components/add-libro/add-libro.component';
import { UpdateLibroComponent } from './components/update-libro/update-libro.component';
import { DetailedLibroComponent } from './components/detailed-libro/detailed-libro.component';
import { ErrorComponent } from './components/error/error.component';
import { QuienSoyComponent } from './components/quien-soy/quien-soy.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { CookieService } from 'ngx-cookie-service';
import { DataAPIService } from './services/data-api.service';
import { ApiServiceService } from './services/api-service.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddLibroComponent,
    UpdateLibroComponent,
    DetailedLibroComponent,
    ErrorComponent,
    QuienSoyComponent,
    NavbarComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true
    }, CookieService, DataAPIService, ApiServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
