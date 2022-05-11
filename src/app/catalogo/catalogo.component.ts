import { Component, Input, OnInit } from '@angular/core';
import { JuegosService } from '../api-service/juegos.service';
import { Catalogo } from '../Models/Catalogo';
import { Juego } from '../Models/Juego';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.sass'],
})
export class CatalogoComponent implements OnInit {
  juegos: Juego[] = [];
  @Input() isShowFilter;
  constructor(public juegosService: JuegosService) {
    juegosService.getAllJuegos();
  }

  ngOnInit(): void {
    setInterval(() => {
      if (!this.juegos.length) {
        this.juegos = Catalogo.juegos;
      }
    }, 50);
  }

  toggleFilter($event?){
    this.isShowFilter = !this.isShowFilter;
  }
}
