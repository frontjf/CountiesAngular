
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { Location } from '@angular/common';  // Importar Location para navegar hacia atrás

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.css']
})
export class CountryDetailComponent implements OnInit {

  country: any;

  constructor(
    private route: ActivatedRoute,
    private countriesService: CountriesService,
    private location: Location  // Inyectar el servicio Location
  ) { }

  ngOnInit(): void {
    const name = this.route.snapshot.paramMap.get('name');  // Obtener el nombre del país de la URL
    this.countriesService.getCountryByName(name!).subscribe((data: any) => {
      this.country = data[0];  // Asignar los datos del país al componente
    });
  }

  // Método para volver a la página anterior
  goBack(): void {
    this.location.back();  // Navegar de regreso a la página principal
  }
}




