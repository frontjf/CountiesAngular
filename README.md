# Esta prueba me ha costado lo suyo, he vuelto a repasar Angular y he tenido que aprender a hacer test, he hecho lo que he podido con los conocimientos que tengo y la ayuda de internet

# Countries App

Aplicación web de Angular que permite a los usuarios buscar y filtrar países a través de una API REST. La aplicación incluye búsqueda por nombre de país, filtrado por región y la visualización de detalles de cada país. Además, se han implementado pruebas unitarias para garantizar el correcto funcionamiento de la web (ng test).

## Estructura del Proyecto

La estructura del proyecto es la siguiente:

- **src/**
  - **app/**
    - **components/**: Componentes de Angular para la interfaz de usuario.
      - **countries-list/**: Componente que muestra la lista de países.
      - **country-detail/**: Componente que muestra los detalles de un país seleccionado.
    - **services/**: Servicios que se comunican con la API REST para obtener datos de países.
    - **app.module.ts**: Módulo principal de la aplicación.
    - **app-routing.module.ts**: Módulo de enrutamiento que gestiona las rutas de la aplicación.
  - **assets/**: Archivos estáticos como imágenes y estilos.
  - **index.html**: Archivo HTML principal de la aplicación.
  - **styles.css**: Estilos globales de la aplicación.

## Implementación de Funcionalidades

### Búsqueda y Filtrado de Países

- Se implementó un campo de entrada centrado en la pantalla para buscar países por nombre. A medida que el usuario escribe, la lista de países se filtra en tiempo real.
- También se incluye un menú desplegable para filtrar los países por región. Los países se muestran como un enlace, y al hacer clic en el nombre de un país, se redirige a la página de detalles del país.

### Visualización de Detalles del País

- En la página de detalles del país, se muestran información relevante como el nombre del país, la bandera y otros detalles.
- Se añadió un botón para volver a la página principal desde la página de detalles.

## Pruebas Unitarias

Se han implementado pruebas unitarias para asegurar el correcto funcionamiento de los componentes y servicios (ng test). Las pruebas incluyen:

- **CountriesListComponent**: 
  - Verifica que se crea el componente correctamente.
  - Asegura que la lista de países se renderiza correctamente.
  - Comprueba que la funcionalidad de búsqueda filtra los países correctamente.
  - Verifica que el filtrado por región funciona como se espera.

- **CountryDetailComponent**: 
  - Asegura que se crea el componente correctamente.
  - Comprueba que se obtienen los detalles del país seleccionado a través del servicio.

- **CountriesService**: 
  - Verifica que se crea el servicio correctamente.
  - Asegura que se pueden recuperar todos los países de la API.

- **AppComponent**: 
  - Verifica que se crea la aplicación correctamente.
  - Asegura que se establece el título de la aplicación.

Todas las pruebas se ejecutan sin errores...despues de haber corregido los tropocientos que me salieron.....

# CountriesApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
