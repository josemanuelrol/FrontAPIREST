import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AddLibroComponent } from './components/add-libro/add-libro.component';
import { DetailedLibroComponent } from './components/detailed-libro/detailed-libro.component';
import { combineLatest } from 'rxjs';
import { UpdateLibroComponent } from './components/update-libro/update-libro.component';
import { ErrorComponent } from './components/error/error.component';
import { QuienSoyComponent } from './components/quien-soy/quien-soy.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guardianes/auth.guard';

const routes: Routes = [
  {path: '', component:QuienSoyComponent, canActivate: [AuthGuard]},
  {path: 'home', component:HomeComponent, canActivate: [AuthGuard]},
  {path: 'addLibro', component:AddLibroComponent, canActivate: [AuthGuard]},
  {path: 'detailedLibro/:isbn', component:DetailedLibroComponent, canActivate: [AuthGuard]},
  {path: 'update/:isbn', component:UpdateLibroComponent, canActivate: [AuthGuard]},
  {path: 'quienSoy', component:QuienSoyComponent},
  {path: 'login', component:LoginComponent},
  {path: '**', component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
