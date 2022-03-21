import { Component, OnInit } from '@angular/core';
import { JuegosService } from '../api-service/juegos.service';
import { Juegos } from '../Models/juegos';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.sass'],
})
export class CatalogoComponent implements OnInit {
  juegos!: Juegos[];
  juego: Juegos = new Juegos();

  constructor(private juegosService: JuegosService) {}

  ngOnInit(): void {
    this.juegosService.getAllJuegos().subscribe((data) => {
      console.log(data);
      this.juegos = data;
    });
  }
}
