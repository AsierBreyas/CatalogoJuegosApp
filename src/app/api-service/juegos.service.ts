import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Catalogo } from '../Models/Catalogo';

@Injectable({
  providedIn: 'root',
})
export class JuegosService {
  public url = environment.apiUrl + '/CatalogoJuegos';

  constructor(private http: HttpClient) { }

  public getAllJuegos(): void {
    this.http.get(`${this.url}`).subscribe((data:any) => {
      Catalogo.juegos=data;
    });
  }
}
