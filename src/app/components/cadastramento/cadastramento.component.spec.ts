import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastramentoComponent } from './cadastramento.component';

describe('CadastramentoComponent', () => {
  let component: CadastramentoComponent;
  let fixture: ComponentFixture<CadastramentoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastramentoComponent]
    });
    fixture = TestBed.createComponent(CadastramentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
