import { RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { DificultatComponent } from './components/dificultat/dificultat.component';
import { RcetasComponent } from './components/rcetas/rcetas.component';
import { RcetaComponent } from './components/rceta/rceta.component';
import { BuscadorComponent } from './components/buscador/buscador.component';

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'dificultat', component: DificultatComponent },
    { path: 'rcetas', component: RcetasComponent },
    { path: 'rceta/:id', component: RcetaComponent },
    { path: 'buscar/:termino', component: BuscadorComponent },
    { path: '', pathMatch: 'full', redirectTo: 'home' }

];
// export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true } );
export const APP_ROUTING = RouterModule.forRoot( APP_ROUTES );

// importar APP_ROUTING en app.module.ts
