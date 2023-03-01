import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeBgDirectiveComponent } from './change-bg-directive.component';

describe('ChangeBgDirectiveComponent', () => {
  let component: ChangeBgDirectiveComponent;
  let fixture: ComponentFixture<ChangeBgDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeBgDirectiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeBgDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
