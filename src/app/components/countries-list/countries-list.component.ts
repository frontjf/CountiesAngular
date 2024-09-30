
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

