import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecuerdaLaSecuenciaComponent } from './recuerda-la-secuencia.component';

describe('RecuerdaLaSecuenciaComponent', () => {
  let component: RecuerdaLaSecuenciaComponent;
  let fixture: ComponentFixture<RecuerdaLaSecuenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecuerdaLaSecuenciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecuerdaLaSecuenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
