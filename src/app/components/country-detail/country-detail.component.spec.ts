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
