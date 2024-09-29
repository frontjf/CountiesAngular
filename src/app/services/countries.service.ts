import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private apiUrl = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) {}

  getAllCountries(): Observable<any> {
    return this.http.get(`${this.apiUrl}/all`);
  }

  getCountryByName(name: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/name/${name}`);
  }

  getCountriesByRegion(region: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/region/${region}`);
  }
}
