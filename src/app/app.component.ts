import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { JuegosService } from './api-service/juegos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'CatalogoJuegosApp';

  constructor(public router: Router,
    private juegosService: JuegosService) {
      juegosService.getAllJuegos();
  }
}
