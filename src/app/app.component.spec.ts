import { TestBed, async,ComponentFixture, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import {HttpClientTestingModule} from '@angular/common/http/testing'
import { HelloService } from './reques-api/hello.service';
import { HelloMessage } from './reques-api/hello-message';
import { of } from 'rxjs';

describe('AppComponent', () => {

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let service: HelloService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [
        AppComponent
      ],
      providers:[
        HelloService
      ]
    }).compileComponents();
        // create component and test fixture
        fixture = TestBed.createComponent(AppComponent);

        // get test component from the fixture
        component = fixture.componentInstance;
    
        // UserService provided to the TestBed
        service = TestBed.get(HelloService);
  }));

  it('should create the app', () => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title in a h1 tag', fakeAsync(() => {
    // Arrange
    const dummy = new HelloMessage();
    dummy.message = "dummy";
    spyOn(service,'getHello').and.returnValue(of(dummy));

    // Act
    component.ngOnInit();

    // Assert
    tick();
    fixture.detectChanges()
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('dummy');
  })
  );
});
