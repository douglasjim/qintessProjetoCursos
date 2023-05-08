import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobreOPortalComponent } from './sobre-oportal.component';

describe('SobreOPortalComponent', () => {
  let component: SobreOPortalComponent;
  let fixture: ComponentFixture<SobreOPortalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SobreOPortalComponent]
    });
    fixture = TestBed.createComponent(SobreOPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
