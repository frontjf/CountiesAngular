import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'; // Se importan HttpClientTestingModule y HttpTestingController
import { CountriesService } from './countries.service';

describe('CountriesService', () => {
  let service: CountriesService;
  let httpTestingController: HttpTestingController; // Se agrega HttpTestingController para controlar las solicitudes HTTP

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], // Se importa HttpClientTestingModule para simular peticiones HTTP
      providers: [CountriesService]
    });
    
    service = TestBed.inject(CountriesService);
    httpTestingController = TestBed.inject(HttpTestingController); // Inyección del controlador de pruebas HTTP
  });

  afterEach(() => {
    httpTestingController.verify(); // Verifica que no queden peticiones pendientes después de cada test
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // Ejemplo de prueba para verificar una solicitud HTTP simulada
  it('should retrieve all countries', () => {
    const mockCountries = [
      { name: { common: 'Argentina' }, region: 'Americas' },
      { name: { common: 'Australia' }, region: 'Oceania' }
    ];

    service.getAllCountries().subscribe(countries => {
      expect(countries).toEqual(mockCountries);
    });

    // Espera la petición HTTP simulada y responde con los datos falsos
    const req = httpTestingController.expectOne('https://restcountries.com/v3.1/all');
    expect(req.request.method).toEqual('GET');
    req.flush(mockCountries); // Envía la respuesta simulada
  });
});

