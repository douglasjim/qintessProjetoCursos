import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaDoAlunoComponent } from './area-do-aluno.component';

describe('AreaDoAlunoComponent', () => {
  let component: AreaDoAlunoComponent;
  let fixture: ComponentFixture<AreaDoAlunoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AreaDoAlunoComponent]
    });
    fixture = TestBed.createComponent(AreaDoAlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
