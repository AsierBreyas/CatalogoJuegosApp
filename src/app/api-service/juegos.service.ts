import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError, Observable } from 'rxjs';
import { Catalogo } from '../Models/Catalogo';
import { Juego } from '../Models/Juego';

@Injectable({
  providedIn: 'root',
})
export class JuegosService {
  public url = environment.apiUrl + '/CatalogoJuegos';

  constructor(private http: HttpClient) {}

  public getAllJuegos(): void {
    this.http.get(`${this.url}`).subscribe((data: any) => {
      Catalogo.juegos = data;
    });
  }

  public getJuego(id: number) {
    const route = `${this.url}/${id}`;
    return this.http.get<Juego>(route);
  }

  public getJuegosFiltered(filtro: { title?: string, genre?: string, year?: string}){
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    const route = `${this.url}/filter`
    return this.http.post(route, filtro, {headers: headers}).toPromise()
  }
}
