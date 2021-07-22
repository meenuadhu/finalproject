import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatnershipformComponent } from './patnershipform.component';

describe('PatnershipformComponent', () => {
  let component: PatnershipformComponent;
  let fixture: ComponentFixture<PatnershipformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatnershipformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatnershipformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
