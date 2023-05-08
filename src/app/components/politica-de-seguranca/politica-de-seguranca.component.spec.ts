import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliticaDeSegurancaComponent } from './politica-de-seguranca.component';

describe('PoliticaDeSegurancaComponent', () => {
  let component: PoliticaDeSegurancaComponent;
  let fixture: ComponentFixture<PoliticaDeSegurancaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PoliticaDeSegurancaComponent]
    });
    fixture = TestBed.createComponent(PoliticaDeSegurancaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
