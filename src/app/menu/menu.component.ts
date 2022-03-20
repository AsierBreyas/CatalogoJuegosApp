import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent implements OnInit {
  menuOption="inicio";
  constructor(public router: Router) { }
  
  fInicio(){
    this.menuOption="inicio";
    this.router.navigateByUrl('inicio');
  }
  fMisJuegos(){
    this.menuOption="misJuegos";
    this.router.navigateByUrl('mis-juegos');
  }
  fCatalogo(){
    this.menuOption="catalogo";
    this.router.navigateByUrl('catalogo');
  }
  ngOnInit(): void {

  }

}
