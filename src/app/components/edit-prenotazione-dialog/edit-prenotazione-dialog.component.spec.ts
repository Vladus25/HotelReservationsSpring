import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPrenotazioneDialogComponent } from './edit-prenotazione-dialog.component';

describe('EditPrenotazioneDialogComponent', () => {
  let component: EditPrenotazioneDialogComponent;
  let fixture: ComponentFixture<EditPrenotazioneDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPrenotazioneDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditPrenotazioneDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
