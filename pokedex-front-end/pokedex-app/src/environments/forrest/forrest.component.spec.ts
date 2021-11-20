import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForrestComponent } from './forrest.component';

describe('ForrestComponent', () => {
  let component: ForrestComponent;
  let fixture: ComponentFixture<ForrestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForrestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForrestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
