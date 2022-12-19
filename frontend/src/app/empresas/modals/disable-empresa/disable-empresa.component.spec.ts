import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisableEmpresaComponent } from './disable-empresa.component';

describe('DisableEmpresaComponent', () => {
  let component: DisableEmpresaComponent;
  let fixture: ComponentFixture<DisableEmpresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisableEmpresaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisableEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
