import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Libro } from 'src/app/modelo/libro';
import { DataAPIService } from 'src/app/services/data-api.service';

@Component({
  selector: 'app-detailed-libro',
  templateUrl: './detailed-libro.component.html',
  styleUrls: ['./detailed-libro.component.css']
})
export class DetailedLibroComponent implements OnInit {

  libro !: Libro;

  isbn:number = 0;

  constructor(private dataService:DataAPIService, private route:ActivatedRoute){
    this.libro = {
      isbn: 0,
      titulo: "",
      autor: "",
      categoria: "",
      fecha: "",
      precio: 0,
      unidades: 0
    }
  }

  ngOnInit(): void {
    this.isbn = this.route.snapshot.params['isbn'];
    this.findByIsbn(this.isbn);
  }

  findByIsbn(isbn:number){
    this.dataService.findByIsbn(isbn).subscribe({
      next: (resp => this.libro = resp),
      error: (resp => console.error(resp)),
    })
  }

}
