import { animate, query, stagger, state, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { bufferToggle } from 'rxjs';
import { JuegosService } from '../api-service/juegos.service';
import { Catalogo } from '../Models/Catalogo';
import { Juego } from '../Models/Juego';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.sass'],
  animations: [
    trigger('popFilter', [
      transition(
        ':enter', 
        [
          style({ height: 0, opacity: 0, zIndex: 100 }),
          animate('1s ease-out', 
                  style({ height: 300, opacity: 1, zIndex: 100 }))
        ]
      ),
      transition(
        ':leave', 
        [
          style({ height: 300, opacity: 1, zIndex: 100 }),
          animate('1s ease-in', 
                  style({ height: 0, opacity: 0, zIndex: 100 }))
        ]
      )
    ])
  ]
})
export class CatalogoComponent implements OnInit {
  juegos: Juego[];
  @Input() isShowFilter;
  constructor(public juegosService: JuegosService) {}

  async ngOnInit() {
    await this.juegosService.getAllJuegos();
    this.juegos = Catalogo.juegos;
    this.onInit();
  }

  toggleFilter($event?) {
    this.isShowFilter = !this.isShowFilter;
  }

  reloadValues($event) {
    console.log('pasa');
    this.juegos = Catalogo.juegos;
    console.log(this.juegos);
  }

  onInit() {
    setInterval(() => {
      if (!this.juegos.length) {
        this.juegos = Catalogo.juegos;
      }
    }, 50);
  }
}
