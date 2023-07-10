import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationOperatorComponent } from './reservation-operator.component';

describe('ReservationOperatorComponent', () => {
  let component: ReservationOperatorComponent;
  let fixture: ComponentFixture<ReservationOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationOperatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservationOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
