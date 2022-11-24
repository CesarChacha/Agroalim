import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaArchivoComponent } from './prueba-archivo.component';

describe('PruebaArchivoComponent', () => {
  let component: PruebaArchivoComponent;
  let fixture: ComponentFixture<PruebaArchivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PruebaArchivoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PruebaArchivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
