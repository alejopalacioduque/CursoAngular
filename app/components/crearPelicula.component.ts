/**
 * Created by alejandropalacio on 4/03/17.
 */
import {Component} from 'angular2/core';
import {Pelicula} from "../model/pelicula";
import {Router} from "angular2/router";
import {PeliculasService} from "../services/peliculas.service";

@Component({
    templateUrl: 'app/view/crear-Pelicula.html',
    providers: [PeliculasService]
})

export class CrearPeliculaComponent {

    constructor(private _peliculasService: PeliculasService, private _router : Router){

    }

    onCrearPelicula(tiulo, director, anio){
        let pelicula:Pelicula = new Pelicula(77, tiulo, director, anio);
        this._peliculasService.insertPelicula(pelicula);
        this._router.navigate(["Peliculas"])
    }
}