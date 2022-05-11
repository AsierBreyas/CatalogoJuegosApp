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
import { BibliotecaService } from '../api-service/biblioteca.service';
import { Biblioteca } from '../Models/Biblioteca';
import { User } from '../Models/User';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.sass'],
})
export class JuegoComponent implements OnInit {
  juegoId = 0;
  juego: Juego = new Juego;
  biblioteca: Biblioteca = new Biblioteca;

  constructor(
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private _location: Location,
    private juegoService: JuegosService,
    private bibliotecaService: BibliotecaService
  ) {}

  loaded = false;
  imgChange = true;
  imgVariable="";
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
      let user = JSON.parse(localStorage.getItem('user') || '{}');
      this.biblioteca.UserId = user.id;
      this.biblioteca.JuegoId = this.juego.juegoId;
      this.bibliotecaService.addGame(this.biblioteca);
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
      type: "fade",
      rewind: true,
      perPage: 1,
      autoplay: true,
    });

    splide.mount();
  }
  changeImg(i: any){
    this.imgVariable=i;
    
   
  }
  imagenes(j: Juego) {
    return j.screenshots.split(',');
  }
  dateFormat(d: any) {
    return d.substring(0, 10);
  }
}
