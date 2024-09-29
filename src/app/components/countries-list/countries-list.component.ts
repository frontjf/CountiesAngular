import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.css']
})
export class CountriesListComponent implements OnInit {

  countries: any[] = [];
  filteredCountries: any[] = [];

  constructor(private countryService: CountriesService) { }

  ngOnInit(): void {
    this.countryService.getAllCountries().subscribe(data => {
      this.countries = data;
      this.filteredCountries = data;
    });
  }

  searchCountry(event: Event): void {
    const input = event.target as HTMLInputElement;
    const query = input?.value.toLowerCase() || '';
    this.filteredCountries = this.countries.filter(country =>
      country.name.common.toLowerCase().includes(query)
    );
  }

  filterByRegion(event: Event): void {
    const select = event.target as HTMLSelectElement;
    const region = select?.value || '';
    if (region) {
      this.filteredCountries = this.countries.filter(country => country.region === region);
    } else {
      this.filteredCountries = this.countries;
    }
  }
}
