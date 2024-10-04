import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountriesListComponent } from './components/countries-list/countries-list.component';
import { CountryDetailComponent } from './components/country-detail/country-detail.component';
import { FormsModule } from '@angular/forms';

@NgModule({ declarations: [
        AppComponent,
        CountriesListComponent,
        CountryDetailComponent
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        AppRoutingModule,
        FormsModule], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }

