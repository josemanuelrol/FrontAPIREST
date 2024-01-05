import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Libro } from 'src/app/modelo/libro';
import { DataAPIService } from 'src/app/services/data-api.service';

@Component({
  selector: 'app-add-libro',
  templateUrl: './add-libro.component.html',
  styleUrls: ['./add-libro.component.css'],
})
export class AddLibroComponent {
  libro!: Libro;

  libro2?: Libro;

  existe: boolean = false;

  categorias: String[] = [
    'Ficción',
    'Amor',
    'Horror',
    'Historia Real',
    'Fantasía',
  ];

  constructor(private dataService: DataAPIService, private router: Router) {
    this.libro = {
      isbn: 0,
      titulo: '',
      autor: '',
      categoria: '',
      fecha: '',
      precio: 0,
      unidades: 0,
    };
  }

  addLibro() {
    this.dataService.createLibro(this.libro).subscribe({
      next: (resp) => {
        alert('Libro creado satisfactoriamente');
        this.router.navigate(['home']);
      },
      error: (resp) => console.error(resp),
    });
  }
}
