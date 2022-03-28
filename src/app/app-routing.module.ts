import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { JuegoComponent } from './juego/juego.component';
import { MisjuegosComponent } from './misjuegos/misjuegos.component';
import { RegisterComponent } from './register/register.component';
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'catalogo', component: CatalogoComponent },
  { path: 'mis-juegos', component: MisjuegosComponent },
  { path: 'juegos/:id', component: JuegoComponent },
  { path: '', component: LoginComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}