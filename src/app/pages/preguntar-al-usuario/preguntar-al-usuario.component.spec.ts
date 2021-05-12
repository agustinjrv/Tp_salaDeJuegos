import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreguntarAlUsuarioComponent } from './preguntar-al-usuario.component';

describe('PreguntarAlUsuarioComponent', () => {
  let component: PreguntarAlUsuarioComponent;
  let fixture: ComponentFixture<PreguntarAlUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreguntarAlUsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreguntarAlUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
