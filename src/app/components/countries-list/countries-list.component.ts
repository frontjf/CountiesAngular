/*
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.css']
})
export class CountriesListComponent implements OnInit {

  countries: any[] = [];
  filteredCountries: any[] = [];
  searchTerm: string = '';  // Definir searchTerm aquí

  constructor(
    private countriesService: CountriesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.countriesService.getAllCountries().subscribe((data: any) => {
      this.countries = data;
      this.filteredCountries = data;
    });
  }

  searchCountry(): void {  
    if (this.searchTerm) {
      this.filteredCountries = this.countries.filter(country =>
        country.name.common.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      this.filteredCountries = this.countries;
    }
  }

  filterByRegion(event: any): void {
    const region = event.target.value;
    if (region) {
      this.filteredCountries = this.countries.filter(country => country.region === region);
    } else {
      this.filteredCountries = this.countries;
    }
  }

  onHover(country: any): void {
    // Lógica para manejar el hover si lo necesitas
  }

  onHoverOut(): void {
    // Lógica para manejar cuando el hover se sale del país
  }
}

*/



import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.css']
})
export class CountriesListComponent implements OnInit {

 
  countries: any[] = [];
  filteredCountries: any[] = [];
  searchTerm: string = '';
  highlightedContinent: string = '';  // Definir la propiedad

  constructor(
    private countriesService: CountriesService,
    private router: Router,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.countriesService.getAllCountries().subscribe((data: any) => {
      this.countries = data;
      this.filteredCountries = data;
    });
  }

  searchCountry(): void {
    if (this.searchTerm) {
      this.filteredCountries = this.countries.filter(country =>
        country.name.common.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      this.filteredCountries = this.countries;
    }
  }

    

  filterByRegion(event: any): void {
    const region = event.target.value;
    if (region) {
      this.filteredCountries = this.countries.filter(country => country.region === region);
    } else {
      this.filteredCountries = this.countries;
    }
  }

  onHover(country: any): void {
    let continentId = '';
    
    switch (country.region) {
      case 'Americas':
        if (country.subregion === 'South America') {
          continentId = 'suramerica';
        } else {
          continentId = 'norteamerica';
        }
        break;
      case 'Africa':
        continentId = 'africa';
        break;
      case 'Europe':
        continentId = 'europa';
        break;
      case 'Asia':
        continentId = 'asia';
        break;
      case 'Oceania':
        continentId = 'australia';
        break;
      default:
        break;
    }

    this.highlightedContinent = continentId;  // Actualizar la propiedad con el continente correcto

    if (continentId) {
      const continentElement = document.getElementById(continentId);
      if (continentElement) {
        this.renderer.addClass(continentElement, 'highlight');
      }
    }
  }

  onHoverOut(): void {
    this.highlightedContinent = '';  // Restablecer la propiedad cuando se sale el mouse

    const continents = ['norteamerica', 'suramerica', 'africa', 'europa', 'asia', 'australia'];
    continents.forEach(continent => {
      const continentElement = document.getElementById(continent);
      if (continentElement) {
        this.renderer.removeClass(continentElement, 'highlight');
      }
    });
  }
}
