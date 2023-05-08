import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconesInferiorDireitoComponent } from './icones-inferior-direito.component';

describe('IconesInferiorDireitoComponent', () => {
  let component: IconesInferiorDireitoComponent;
  let fixture: ComponentFixture<IconesInferiorDireitoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IconesInferiorDireitoComponent]
    });
    fixture = TestBed.createComponent(IconesInferiorDireitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
