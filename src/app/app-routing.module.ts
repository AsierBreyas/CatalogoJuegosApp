import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3/comp3.component';
import { InicioComponent } from './inicio/inicio.component';
import { JuegoComponent } from './juego/juego.component';
import { MisjuegosComponent } from './misjuegos/misjuegos.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'catalogo', component: CatalogoComponent },
  { path: 'mis-juegos', component: MisjuegosComponent },
  { path: 'juegos/:id', component: JuegoComponent },
  { path: '**', redirectTo: 'inicio' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
