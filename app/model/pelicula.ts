/**
 * Created by alejandropalacio on 19/02/17.
 */
export class Pelicula {
    constructor(public id: number,
                public titulo: string,
                public director: string,
                public anio: number) {


    }

    public getTitulo(): string {
        return this.titulo;
    }

    public setTitulo(tit: string) {
        this.titulo = tit;
    }

    public getDirector(): string {
        return this.director;
    }

    public setDirector(dir: string) {
        this.director = dir;
    }

    public getId(): number {
        return this.id;
    }

    public setId(id: number) {
        this.id = id;
    }

    public getAnio(): number {
        return this.anio;
    }

    public setAnio(anio: number) {
        this.anio = anio;
    }
}