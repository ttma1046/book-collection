import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from '@book-collection/app.component';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundPageComponent } from './layout/not-found-page/not-found-page.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        NotFoundPageComponent
      ],
      imports: [
        AppRoutingModule
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
