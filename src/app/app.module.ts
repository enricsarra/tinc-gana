import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';

// Rutas
import { APP_ROUTING } from './app.routes';


// Servicios
import { RcetasService } from './servicios/rcetas.service';

// Componentes
import { AppComponent } from './app.component';

import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { DificultatComponent } from './components/dificultat/dificultat.component';
import { RcetasComponent } from './components/rcetas/rcetas.component';
import { RcetaComponent } from './components/rceta/rceta.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { RcetaTarjaComponent } from './components/rceta-tarja/rceta-tarja.component';
import { GraficoBarraHorizontalComponent } from './components/shared/grafico-barra-horizontal/grafico-barra-horizontal.component';
import { GraficoBarraVerticalComponent } from './components/shared/grafico-barra-vertical/grafico-barra-vertical.component';


import { DomseguroPipe } from './pipes/domseguro.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    DificultatComponent,
    RcetasComponent,
    RcetaComponent,
    BuscadorComponent,
    RcetaTarjaComponent,
    GraficoBarraHorizontalComponent,
    GraficoBarraVerticalComponent,
    DomseguroPipe
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    BrowserAnimationsModule,
    NgxChartsModule
  ],
  providers: [
    RcetasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
