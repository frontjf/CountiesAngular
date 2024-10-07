/*
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CountriesListComponent } from './countries-list.component';
import { CountriesService } from '../../services/countries.service';
import { of } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing'; // Se importa RouterTestingModule

describe('CountriesListComponent', () => {
  let component: CountriesListComponent;
  let fixture: ComponentFixture<CountriesListComponent>;
  let countriesServiceMock: any;

  beforeEach(async () => {
    // Mock del servicio CountriesService
    countriesServiceMock = {
      getAllCountries: jasmine.createSpy('getAllCountries').and.returnValue(of([
        { name: { common: 'Argentina' }, region: 'Americas' },
        { name: { common: 'Australia' }, region: 'Oceania' }
      ]))
    };

    await TestBed.configureTestingModule({
      declarations: [CountriesListComponent],
      imports: [
        FormsModule,
        RouterTestingModule // Añadir RouterTestingModule para simular directivas como routerLink
      ],
      providers: [
        { provide: CountriesService, useValue: countriesServiceMock }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountriesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // Test para verificar que el componente se crea correctamente
  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  // Test para verificar que se renderiza la lista de países
  it('should render the list of countries', () => {
    expect(component.countries.length).toBe(2);
    expect(component.filteredCountries.length).toBe(2);
  });

  // Test para verificar el filtrado por nombre
  it('should filter countries by name', () => {
    const event = { target: { value: 'Argentina' } } as any;
    component.searchCountry(event);
    expect(component.filteredCountries.length).toBe(1);
    expect(component.filteredCountries[0].name.common).toBe('Argentina');
  });

  
 

  // Test para verificar el filtrado por región
  it('should filter countries by region', () => {
    const event = { target: { value: 'Oceania' } } as any;
    component.filterByRegion(event);
    expect(component.filteredCountries.length).toBe(1);
    expect(component.filteredCountries[0].name.common).toBe('Australia');
  });
});
*/


import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CountriesListComponent } from './countries-list.component';
import { CountriesService } from '../../services/countries.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

describe('CountriesListComponent', () => {
  let component: CountriesListComponent;
  let fixture: ComponentFixture<CountriesListComponent>;
  let mockCountriesService: any;

  beforeEach(async () => {
    mockCountriesService = jasmine.createSpyObj('CountriesService', ['getAllCountries']);
    
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      declarations: [CountriesListComponent],
      providers: [
        { provide: CountriesService, useValue: mockCountriesService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CountriesListComponent);
    component = fixture.componentInstance;

    // Mock de los datos de países
    mockCountriesService.getAllCountries.and.returnValue(of([
      { name: { common: 'Spain' }, region: 'Europe', capital: ['Madrid'] },
      { name: { common: 'Germany' }, region: 'Europe', capital: ['Berlin'] }
    ]));

    fixture.detectChanges();  // Activar la detección de cambios
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display country list correctly', () => {
    const countryLinks = fixture.debugElement.queryAll(By.css('.country-link'));
    expect(countryLinks.length).toBe(2);  // Debería haber dos países
    expect(countryLinks[0].nativeElement.textContent).toContain('Spain');
    expect(countryLinks[1].nativeElement.textContent).toContain('Germany');
  });

  it('should filter countries by name', () => {
    component.searchTerm = 'spain';
    component.searchCountry();
    fixture.detectChanges();  // Disparar los cambios en la plantilla

    const filteredCountries = fixture.debugElement.queryAll(By.css('.country-link'));
    expect(filteredCountries.length).toBe(1);
    expect(filteredCountries[0].nativeElement.textContent).toContain('Spain');
  });
});
