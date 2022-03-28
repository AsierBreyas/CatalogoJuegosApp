import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
})
export class HeaderComponent implements OnInit {
  log="p";
  menuOption = 'inicio';
  constructor(public router: Router) {}

  fInicio() {
    this.menuOption = 'inicio';
    this.router.navigateByUrl('inicio');
  }
  fMisJuegos() {
    this.menuOption = 'misJuegos';
    this.router.navigateByUrl('mis-juegos');
  }
  fCatalogo() {
    this.menuOption = 'catalogo';
    this.router.navigateByUrl('catalogo');
  }
  ngOnInit(): void {}
}
