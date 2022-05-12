import { Component, Input, OnInit } from '@angular/core';
import { BibliotecaService } from '../api-service/biblioteca.service';
import { JuegosService } from '../api-service/juegos.service';
import { Catalogo } from '../Models/Catalogo';
import { Juego } from '../Models/Juego';

@Component({
  selector: 'app-misjuegos',
  templateUrl: './misjuegos.component.html',
  styleUrls: ['./misjuegos.component.sass']
})
export class MisjuegosComponent implements OnInit {

  juegos: Juego[] = Catalogo.juegos;
  @Input() isShowFilter;
  constructor(public bibliotecaService: BibliotecaService) {
    let user = JSON.parse(localStorage.getItem('user') || '{}');
    bibliotecaService.getUserGames(user.id);
  }

  ngOnInit(): void {
    this.onInit()
  }

  reloadValues($event){
    console.log('pasa')
    this.juegos = Catalogo.juegos
    console.log(this.juegos)
  }

  onInit(){
    setInterval(() => {
      if (!this.juegos.length) {
        this.juegos = Catalogo.juegos;
      }
    }, 50);
  }

}
