import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptEmpresaComponent } from './accept-empresa.component';

describe('AcceptEmpresaComponent', () => {
  let component: AcceptEmpresaComponent;
  let fixture: ComponentFixture<AcceptEmpresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcceptEmpresaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcceptEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
