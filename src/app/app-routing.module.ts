import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { JuegoComponent } from './juego/juego.component';
import { MisjuegosComponent } from './misjuegos/misjuegos.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './login/auth.guard';
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  // { path: 'catalogo', component: CatalogoComponent, canActivate: [AuthGuard] },
  { path: 'mis-juegos', component: MisjuegosComponent, canActivate: [AuthGuard] },
  { path: 'catalogo/juegos/:id', component: JuegoComponent, canActivate: [AuthGuard] },
  { path: '', component: CatalogoComponent, canActivate: [AuthGuard]  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
