import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Biblioteca } from '../Models/Biblioteca';
import { Catalogo } from '../Models/Catalogo';

@Injectable({
  providedIn: 'root',
})
export class BibliotecaService {
  public url = environment.apiUrl + '/Biblioteca';
  constructor(private http: HttpClient) {}

  public getUserGames(usuarioId: number) {
    const url = `${this.url}/${usuarioId}`;
    return this.http
      .get(url)
      .toPromise()
      .then((data: any) => {
        Catalogo.juegos = data;
      });
  }

  public addGame(biblioteca: Biblioteca): any {
    return this.http
      .post<Biblioteca>(this.url, biblioteca)
      .subscribe((data) => {
        data = biblioteca;
      });
  }

  public removeGame(usuarioId: number, juegoId) {
    const url = `${this.url}/${usuarioId}/${juegoId}`;
    return this.http.delete(url).toPromise();
  }
}
