import { Component } from '@angular/core';

interface Alumno {
  nombre: string;
  apellido: string;
  DNI: number;
  direccion: string;
  genero: string;
  fechaInscripcion: Date;
}

@Component({
  selector: 'app-lista-de-alumnos',
  templateUrl: './lista-de-alumnos.component.html',
  styleUrls: ['./lista-de-alumnos.component.scss']
})
export class ListaDeAlumnosComponent {

  alumnos = [
    {
      nombre: 'Maria',
      apellido: 'Jimenez',
      DNI: 21541234,
      genero: 'femenino',
      direccion: 'Av.San Antonio 234',
      fechaInscripcion: new Date(),
    },
    {
      nombre: 'Roberto',
      apellido: 'Trujillo',
      DNI: 15372191,
      genero: 'masculino',
      direccion: 'Urb.San Jose 241',
      fechaInscripcion: new Date(),
    },
    {
      nombre: 'Ernesto',
      apellido: 'Balotelli',
      DNI: 34562345,
      genero: 'masculino',
      direccion: 'Calle San Isidro 198',
      fechaInscripcion: new Date(),
    },
    {
      nombre: 'Carmen',
      apellido: 'Regosijo',
      DNI: 59867549,
      genero: 'femenino',
      direccion: 'Residencial las Palmeras',
      fechaInscripcion: new Date(),
    }
  ]
nombre: any;
}
