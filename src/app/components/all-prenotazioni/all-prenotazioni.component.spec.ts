import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPrenotazioniComponent } from './all-prenotazioni.component';

describe('AllPrenotazioniComponent', () => {
  let component: AllPrenotazioniComponent;
  let fixture: ComponentFixture<AllPrenotazioniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllPrenotazioniComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllPrenotazioniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
