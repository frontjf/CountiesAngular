import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.css']
})
export class CountryDetailComponent implements OnInit {

  country: any;

  constructor(
    private route: ActivatedRoute,
    private countriesService: CountriesService
  ) { }

  ngOnInit(): void {
    const name = this.route.snapshot.paramMap.get('name');
    this.countriesService.getCountryByName(name!).subscribe((data: any) => {
      this.country = data[0];
    });
  }
}

