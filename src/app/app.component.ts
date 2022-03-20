import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'pruebas';
  array= ["<b>hola<b>", "hola1" ,"hola2"];
  f1(){
    this.title="hola";
    this.router.navigateByUrl('3');
  }

  constructor(public router: Router){
  }
}

