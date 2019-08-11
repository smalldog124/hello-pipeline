import { TestBed } from '@angular/core/testing';

import { HelloService } from './hello.service';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { HelloMessage } from './hello-message';

describe('HelloService', () => {
  let service: HelloService
  let httpTestingController: HttpTestingController

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HelloService]
    })
    service = TestBed.get(HelloService);
    httpTestingController = TestBed.get(HttpTestingController)
  });

  it('should be created', () => {
    const service: HelloService = TestBed.get(HelloService);
    expect(service).toBeTruthy();
  });

  it('Service testing with HTTP client', () => {
    // Arrange
    const response = {
      message: 'Dummy'
    };

    // Act and assert
    service.getHello().subscribe((data: HelloMessage) => {
      expect(data.message).toEqual('Dummy');
    });

    // Assert
    const request = httpTestingController.expectOne('http://localhost:3000/hello');
    expect(request.request.method).toEqual('GET');
    request.flush(response); 
    httpTestingController.verify();
  });
});
