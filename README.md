# tinc-gana
## Demo: [https://tinc-gana.firebaseapp.com]

## Aquest projecte s´ha generat amb [Angular CLI](https://github.com/angular/angular-cli) version 8.3.3.

## Creat amb **ng new tinc-gana**
- node_modules afegits:  
 - **npm install bootstrap --save**, 
 - **npm install jquery --save**, 
 - **npm installpper --save** 
 - Aquestos 3 moduls es  configuren a **angular.json**

 - **npm install @swimlane/ngx-charts --save** 

 ## Gráfics ngx-charts

**Repositori ngx-charts:** [<https://github.com/swimlane/ngx-charts]>

A la documentación/introducciónI tenim el códiStackBlitz [<https://swimlane.gitbook.io/ngx-charts/]> com a exemple.

A la documentación/installing

- **npm install @swimlane/ngx-charts --save**

**Exemple vertical bar char**
- Códi StackBlitz [<https://stackblitz.com/edit/vertical-bar-chart?embed=1&file=app/app.component.ts]>
- Copiar el contingut de *app.component.html* de StackBlitz al component que estem treballant
- Copiem el seguent codi de *app.module.ts* 
    - *import { BrowserAnimationsModule } from '@angular/platform-browser/animations'*;
    - *import { NgxChartsModule } fro*m '@swimlane/ngx-charts*
- y el peguem al nostre módul. *components.module.ts*. A continuació els importem a "imports" 
- Copiar contingut de *class AppComponent* [<https://stackblitz.com/edit/vertical-bar-chart?embed=1&file=app/app.component.ts]> en *app.component.ts* de StackBlitz al component que estem treballant
- Copiar contingut de *data.ts* de StackBlitz al component que estem treballant
- ngx-charts (swimlane) demo: [<https://swimlane.github.io/ngx-charts/#/ngx-charts/bar-horizontal>]
- ngx-charts (swimlane) documentación: [<https://swimlane.gitbook.io/ngx-charts/]>


## Development server

Run `ng serve` per a dev server. Navegar a `http://localhost:4200/`. 

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
