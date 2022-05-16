import { Component, Input, OnInit } from '@angular/core';
import { BibliotecaService } from '../api-service/biblioteca.service';
import { JuegosService } from '../api-service/juegos.service';
import { Catalogo } from '../Models/Catalogo';
import { Juego } from '../Models/Juego';

@Component({
  selector: 'app-misjuegos',
  templateUrl: './misjuegos.component.html',
  styleUrls: ['./misjuegos.component.sass'],
})
export class MisjuegosComponent implements OnInit {
  juegos: Juego[];
  @Input() isShowFilter;
  constructor(public bibliotecaService: BibliotecaService) {}

  async ngOnInit() {
    let user = JSON.parse(localStorage.getItem('user') || '{}');
    await this.bibliotecaService.getUserGames(user.id);
    this.juegos = Catalogo.juegos;
    this.onInit();
  }

  reloadValues($event) {
    console.log('pasa');
    this.juegos = Catalogo.juegos;
  }

  onInit() {
    setInterval(() => {
      if (!this.juegos.length) {
        this.juegos = Catalogo.juegos;
      }
    }, 50);
  }
}
