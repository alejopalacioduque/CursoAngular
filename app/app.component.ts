import {Component} from 'angular2/core';
import {Pelicula} from './model/pelicula';

@Component({
    selector: 'my-app',
    templateUrl: 'app/view/peliculas.html',
    styleUrls :["../assets/css/styles.css"]
})

export class AppComponent {
    private titulo: string = "PELICULAS -->";
    public pelicula: Pelicula;
    public mostrarDatos;

    constructor() {
        this.mostrarDatos = false;
        this.pelicula = new Pelicula(1, "Batman", "cualqioera", 2016);
    }

    onShowHide(value){
        this.mostrarDatos = value;
    }

    holaMundo() {
        alert("Peliculas: " + this.pelicula.getTitulo() + " - " + this.pelicula.getDirector() + " - " + this.pelicula.getAnio());
    }
}
