import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Libro } from 'src/app/modelo/libro';
import { DataAPIService } from 'src/app/services/data-api.service';

@Component({
  selector: 'app-update-libro',
  templateUrl: './update-libro.component.html',
  styleUrls: ['./update-libro.component.css']
})
export class UpdateLibroComponent implements OnInit {

  libro !: Libro;

  isbn:number = 0;

  categorias:String[] = ["Ficción","Amor","Horror","Historia Real","Fantasía"];

  constructor(private dataService:DataAPIService, private router:Router, private route:ActivatedRoute){
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

  updateLibro(){
    this.dataService.updateLibro(this.isbn,this.libro).subscribe({
      next: (resp => {
        alert("Libro modificado satisfactoriamente");
        this.router.navigate(['home'])
      }),
      error: (resp => console.error(resp)),
    })
  }

  findByIsbn(isbn:number){
    this.dataService.findByIsbn(isbn).subscribe({
      next: (resp => this.libro = resp),
      error: (resp => console.error(resp)),
    })
  }

}
