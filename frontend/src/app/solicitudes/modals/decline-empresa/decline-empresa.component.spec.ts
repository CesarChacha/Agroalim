import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeclineEmpresaComponent } from './decline-empresa.component';

describe('DeclineEmpresaComponent', () => {
  let component: DeclineEmpresaComponent;
  let fixture: ComponentFixture<DeclineEmpresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeclineEmpresaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeclineEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
