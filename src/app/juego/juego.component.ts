import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CatalogoComponent } from '../catalogo/catalogo.component';
import { Catalogo } from '../Models/Catalogo';
import Splide from '@splidejs/splide';
import { ToastrService } from 'ngx-toastr';
import { Location } from '@angular/common';
import { JuegosService } from '../api-service/juegos.service';
import { Juego } from '../Models/Juego';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.sass'],
})
export class JuegoComponent implements OnInit {
  juegoId = 0;
  juego: Juego = new Juego;

  constructor(
    private activatedRoute: ActivatedRoute,
    private catalogoComponent: CatalogoComponent,
    private toastr: ToastrService,
    private _location: Location,
    private juegoService: JuegosService
  ) {}

  loaded = false;
  imgChange = true;
  ngOnInit(): void {
    this.init();
  }

  favs() {
    // Conexion a tabla dela biblioteca del usuario

    //----------------------------------------------

    this.toastr.toastrConfig.positionClass = 'toast-top-center';
    if (this.imgChange) {
      // @ts-ignore
      document.getElementById('imgStar').src = './assets/img/addedStar.png';
      this.toastr.success('', 'Game added to favourites', {
        titleClass: 'center',
        messageClass: 'center',
      });
    } else {
      // @ts-ignore
      document.getElementById('imgStar').src = './assets/img/baseStar.png';
      this.toastr.success('', 'Game deleted from favourites', {
        titleClass: 'center',
        messageClass: 'center',
      });
    }
    this.imgChange = !this.imgChange;
  }
  retroceder() {
    this._location.back();
  }
  init() {
    this.juegoId = +(this.activatedRoute.snapshot.paramMap.get('id') ?? 0);
    this.juegoService.getJuego(this.juegoId).subscribe((response: Juego) => {
      this.juego = response;
    });

    var splide = new Splide('.splide', {
      type: 'fade',
      rewind: true,
      perPage: 1,
      autoplay: true,
    });

    splide.mount();
  }

  imagenes(j: Juego) {
    return j.screenshots.split(',');
  }
  dateFormat(d: any) {
    return d.substring(0, 10);
  }
}
