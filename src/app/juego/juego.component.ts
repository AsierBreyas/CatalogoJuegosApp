import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CatalogoComponent } from '../catalogo/catalogo.component';
import { Catalogo } from '../Models/Catalogo';
import Splide from '@splidejs/splide';


@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.sass']
})
export class JuegoComponent implements OnInit {

  public juego: any;
  juegoId = 0;

  constructor(private activatedRoute: ActivatedRoute,
    private catalogoComponent: CatalogoComponent) { }

  loaded = false;
  ngOnInit(): void {
    setInterval(() => {
      if (Catalogo.juegos.length && !this.loaded) {
        this.init();
        this.loaded = true;
      }
    }, 50);

  }

  init() {
    this.juegoId = +(this.activatedRoute.snapshot.paramMap.get("id") ?? 0);
    this.juego = Catalogo.juegos.find(i => i.juegoId == this.juegoId);
    console.log(this.juegoId, this.catalogoComponent.juegos);
    var splide = new Splide( '.splide', {
      type  : 'fade',
      rewind: true,
      perPage : 1,
      autoplay: true,
    } );
    
    splide.mount();
  }

  imagenes(j: any) {
    return j.screenshots.split(',');
  }
  dateFormat(d: any) {
    return d.substring(0,10);
  }
}
