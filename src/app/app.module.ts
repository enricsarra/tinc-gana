import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Rutas
import { APP_ROUTING } from './app.routes';


// Servicios
import { RcetasService } from './servicios/rcetas.service';

// Componentes
import { AppComponent } from './app.component';

import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { RcetasComponent } from './components/rcetas/rcetas.component';
import { RcetaComponent } from './components/rceta/rceta.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { RcetaTarjaComponent } from './components/rceta-tarja/rceta-tarja.component';

import { DomseguroPipe } from './pipes/domseguro.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    RcetasComponent,
    RcetaComponent,
    BuscadorComponent,
    RcetaTarjaComponent,
    DomseguroPipe
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    RcetasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
