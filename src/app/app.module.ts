import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { InfoViewComponent } from './info-view/info-view.component';
import { JuegosService } from './api-service/juegos.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CatalogoComponent,
    InfoViewComponent,
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [JuegosService],
  bootstrap: [AppComponent],
})
export class AppModule {}
