import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPrenotazioneDialogComponent } from './add-prenotazione-dialog.component';

describe('AddPrenotazioneDialogComponent', () => {
  let component: AddPrenotazioneDialogComponent;
  let fixture: ComponentFixture<AddPrenotazioneDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPrenotazioneDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPrenotazioneDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
