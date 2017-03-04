import {Component} from 'angular2/core';
import {Pelicula} from '../model/pelicula';
import {PeliculasService}  from '../services/peliculas.service';

@Component({
    selector: 'peliculas-list',
    templateUrl: 'app/view/peliculas-list.html',
    providers : [PeliculasService]
})

export class PeliculasListComponent {
    public pelicula: Pelicula;
    public peliculaElegida : Pelicula;
    public mostrarDatos;
    public peliculas: Array<Pelicula>;

    constructor(private _peliculasService : PeliculasService) {
        this.mostrarDatos = false;
        this.peliculas = this._peliculasService.getPeliculas();
        this.peliculaElegida = this.peliculas[0];
        this.pelicula = this.peliculas[0];

    }

    onShowHide(value) {
        this.mostrarDatos = value;
    }

    holaMundo() {
        alert("Peliculas: " + this.pelicula.getTitulo() + " - " + this.pelicula.getDirector() + " - " + this.pelicula.getAnio());
    }

    onLog(titulo = null) {
        if (titulo != null) {
            console.log(this.pelicula.titulo);
        } else {
            console.log(this.pelicula);
        }
    }

    onCambiarPelicula(peli: Pelicula) {
        this.pelicula = peli;
        this.peliculaElegida = peli;
    }
}