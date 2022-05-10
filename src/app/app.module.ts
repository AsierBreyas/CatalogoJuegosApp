import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { InfoViewComponent } from './info-view/info-view.component';
import { JuegosService } from './api-service/juegos.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';

import { LoginComponent } from './login/login.component';
import { JuegoComponent } from './juego/juego.component';
import { MisjuegosComponent } from './misjuegos/misjuegos.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { ToastrModule } from 'ngx-toastr';
import { FiltroComponent } from './filtro/filtro.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthGuard } from './login/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CatalogoComponent,
    InfoViewComponent,
    LoginComponent,
    JuegoComponent,
    MisjuegosComponent,
    RegisterComponent,
    FiltroComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    AppRoutingModule,
    FormsModule,
    MatIconModule,
    ReactiveFormsModule,
    NgbModule,


    ToastrModule.forRoot(),
  ],
  providers: [JuegosService,CatalogoComponent, AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
