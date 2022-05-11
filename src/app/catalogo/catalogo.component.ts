import { AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { JuegosService } from '../api-service/juegos.service';
import { Catalogo } from '../Models/Catalogo';
import { Juego } from '../Models/Juego';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.sass'],
})
export class CatalogoComponent implements OnInit {
  juegos: Juego[] = Catalogo.juegos;
  @Input() isShowFilter;
  constructor(public juegosService: JuegosService) {
    juegosService.getAllJuegos();
  }

  ngOnInit(): void {
    this.onInit()
  }

  toggleFilter($event?){
    this.isShowFilter = !this.isShowFilter;
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
