import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalAprendizComponent } from './portal-aprendiz.component';

describe('PortalAprendizComponent', () => {
  let component: PortalAprendizComponent;
  let fixture: ComponentFixture<PortalAprendizComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PortalAprendizComponent]
    });
    fixture = TestBed.createComponent(PortalAprendizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
