import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CatalogoComponent } from '../catalogo/catalogo.component';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.sass']
})
export class JuegoComponent implements OnInit {
  public juego:any;
  juegoId=0;
  constructor(private activatedRoute: ActivatedRoute,
    private catalogoComponent:CatalogoComponent) { }

  ngOnInit(): void {
    this.juegoId=+(this.activatedRoute.snapshot.paramMap.get("id") ?? 0);
    this.juego=this.catalogoComponent.juegos.find(i=>i.id==this.juegoId);
    console.log(this.juego);
  } 

}
