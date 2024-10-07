/*
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountriesListComponent } from './components/countries-list/countries-list.component';
import { CountryDetailComponent } from './components/country-detail/country-detail.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({ declarations: [
        AppComponent,
        CountriesListComponent,
        CountryDetailComponent
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        AppRoutingModule,
        FormsModule], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }

*/


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountriesListComponent } from './components/countries-list/countries-list.component';
import { CountryDetailComponent } from './components/country-detail/country-detail.component';
import { FormsModule } from '@angular/forms';  // <-- Ya está bien importado
import { CommonModule } from '@angular/common';  // <-- Asegúrate de agregar CommonModule si lo necesitas

@NgModule({
  declarations: [
    AppComponent,
    CountriesListComponent,
    CountryDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,  // <-- FormsModule necesario para ngModel
    CommonModule  // <-- CommonModule opcional si lo necesitas para otras directivas comunes
  ],
  providers: [
    provideHttpClient(withInterceptorsFromDi())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
