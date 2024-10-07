/*
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';  // Necesario para simular observables
import { CountryDetailComponent } from './country-detail.component';
import { CountriesService } from '../../services/countries.service'; // Asegúrate de importar el servicio
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http'; // Importa el HttpClientModule

describe('CountryDetailComponent', () => {
  let component: CountryDetailComponent;
  let fixture: ComponentFixture<CountryDetailComponent>;
  let countriesServiceMock: any;

  beforeEach(async () => {
    countriesServiceMock = {
      getCountryDetail: jasmine.createSpy('getCountryDetail').and.returnValue(of({
        name: 'Argentina',
        capital: 'Buenos Aires',
        region: 'Americas',
        population: 45195777
      })),
      getCountryByName: jasmine.createSpy('getCountryByName').and.returnValue(of({
        name: 'Argentina',
        capital: 'Buenos Aires',
        region: 'Americas',
        population: 45195777
      })) // Agrega el método getCountryByName
    };

    await TestBed.configureTestingModule({
    declarations: [CountryDetailComponent],
    imports: [],
    providers: [
        {
            provide: ActivatedRoute,
            useValue: {
                snapshot: {
                    paramMap: {
                        get: () => 'country-code', // Simula la obtención de un parámetro de la URL
                    },
                },
                paramMap: of({
                    get: (key: string) => 'country-code', // Simulación del observable paramMap
                }),
            },
        },
        { provide: CountriesService, useValue: countriesServiceMock } // Proveer el servicio simulado
        ,
        provideHttpClient(withInterceptorsFromDi())
    ]
}).compileComponents();

    fixture = TestBed.createComponent(CountryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Puedes agregar más pruebas aquí según sea necesario
});
*/



import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CountryDetailComponent } from './country-detail.component';
import { CountriesService } from '../../services/countries.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { Location } from '@angular/common';
import { FormsModule } from '@angular/forms';

describe('CountryDetailComponent', () => {
  let component: CountryDetailComponent;
  let fixture: ComponentFixture<CountryDetailComponent>;
  let mockCountriesService: any;
  let mockActivatedRoute: any;
  let locationSpy: jasmine.SpyObj<Location>;

  beforeEach(async () => {
    mockCountriesService = jasmine.createSpyObj('CountriesService', ['getCountryByName']);
    mockActivatedRoute = {
      snapshot: {
        paramMap: {
          get: jasmine.createSpy('get').and.returnValue('Spain')
        }
      }
    };

    locationSpy = jasmine.createSpyObj('Location', ['back']);

    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [CountryDetailComponent],
      providers: [
        { provide: CountriesService, useValue: mockCountriesService },
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: Location, useValue: locationSpy }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CountryDetailComponent);
    component = fixture.componentInstance;

    mockCountriesService.getCountryByName.and.returnValue(of([{
      name: { common: 'Spain' },
      flags: { svg: 'spain-flag.svg' },
      population: 47450795,
      region: 'Europe',
      capital: ['Madrid']
    }]));

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display country details', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('Spain');
    expect(compiled.querySelector('img').src).toContain('spain-flag.svg');
    expect(compiled.querySelector('p').textContent).toContain('Madrid');
  });

  it('should go back when goBack is called', () => {
    component.goBack();
    expect(locationSpy.back).toHaveBeenCalled();
  });
});



