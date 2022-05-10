import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Biblioteca } from '../Models/Biblioteca';

@Injectable({
  providedIn: 'root'
})
export class BibliotecaService {

  public url = environment.apiUrl + '/Biblioteca';
  constructor(private http: HttpClient) { }

  public addGame(biblioteca: Biblioteca): any{
    return this.http.post<Biblioteca>(this.url , biblioteca).subscribe(data =>{
      data = biblioteca
    })
  }

}