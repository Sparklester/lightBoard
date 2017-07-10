# LightBoard

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# Com està fet 
## Els components

El nostre projecte es divideix en dues parts, la configuració dels elements i la programació d'aquests. De moment hem estat fent l'apartat de configuració. Respecte al disseny hi han altres components com ara, el login de l'inici, la barra de navegació. La configuració es divideix en:

- Configuració de sortida (confsort):
    - Component que integrarà els atributs i característiques de cada sortida (tipus, Pin sortida, nom, potència)
    - Importar la classe (element) que conté les seves característiques (tipus, tipus, Pin sortida, nom, potència)
    - Es declara un input que incorpora les propietats de la classe Element
 
- Configuració de sortida dels dispositius: component que integrarà una sèrie de configuracions de sortida
    - Aquest element utilitzarà la classe Element
    - Aquest component registrarà la informació de nous elements i l'assignarà a una posició d'un array. Després mitjançant un ngFor, envia la informació de cada element de cada posició de l'array al component CONFIG SORTIDA, aquest component s'encarrega d'emmagatzemar la informació que se li ha assignat, per a posar-la dins un objecte Element que està buit.
    
