import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { throwError } from 'rxjs';
import { Libro } from 'src/app/modelo/libro';
import { DataAPIService } from 'src/app/services/data-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  libros:Libro[] = [];

  constructor(private dataService:DataAPIService){}

  ngOnInit(): void {
    this.findAll();
  }

  findAll(){
    this.dataService.findAll().subscribe({
      next: (resp => this.libros = resp),
      error: (resp => console.error(resp)),
    })
  }

  deleteLibro(isbn:number){
    this.dataService.deleteLibro(isbn).subscribe({
      next: (resp => {
        alert("Libro eliminado satisfactoriamente");
        this.findAll();
      }),
      error: (resp => console.error(resp)),
    })
  }

}
