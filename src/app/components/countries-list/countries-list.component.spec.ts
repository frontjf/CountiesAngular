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
