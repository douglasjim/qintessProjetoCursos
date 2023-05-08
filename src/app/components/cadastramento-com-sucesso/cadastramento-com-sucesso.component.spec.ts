import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastramentoComSucessoComponent } from './cadastramento-com-sucesso.component';

describe('CadastramentoComSucessoComponent', () => {
  let component: CadastramentoComSucessoComponent;
  let fixture: ComponentFixture<CadastramentoComSucessoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastramentoComSucessoComponent]
    });
    fixture = TestBed.createComponent(CadastramentoComSucessoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
