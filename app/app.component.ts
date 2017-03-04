import {Component} from 'angular2/core';
import {PeliculasListComponent} from './components/peliculas-list.component';
import {PeliculasFooterComponent} from "./components/peliculas-footer.component";
import {ContactoComponent} from "./components/contacto.component";
import {CrearPeliculaComponent} from "./components/crearPelicula.component"
import {ROUTER_DIRECTIVES, RouteConfig, Router} from 'angular2/router';


@Component({
    selector: 'my-app',
    templateUrl: 'app/view/peliculas.html',
    directives: [PeliculasListComponent,
        PeliculasFooterComponent,
        ContactoComponent,
        CrearPeliculaComponent,
        ROUTER_DIRECTIVES],
    styleUrls :["../assets/css/styles.css"]
})

@RouteConfig([
    {path: "/peliculas", name: "Peliculas", component: PeliculasListComponent, useAsDefault: true},
    {path: "/contacto", name: "Contacto", component: ContactoComponent},
    {path: "/crear-Pelicula", name: "CrearPelicula", component: CrearPeliculaComponent}
])
export class AppComponent {
    public  titulo : string = "Peliculas -->";

}
