import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuLateralComItensComponent } from './menu-lateral-com-itens.component';

describe('MenuLateralComItensComponent', () => {
  let component: MenuLateralComItensComponent;
  let fixture: ComponentFixture<MenuLateralComItensComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuLateralComItensComponent]
    });
    fixture = TestBed.createComponent(MenuLateralComItensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
