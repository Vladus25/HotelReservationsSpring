import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ConnectionDBService } from 'src/app/services/connection-db.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';


@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent {
  unavailableDates: string[] = [];

  startDate: Date | null = null;
  endDate: Date | null = null;
  startDates: Date[] = [];
  endDates: Date[] = [];

  prenotazioni: any;
  stanze: any;
  user!: number;

  prenotazione: any = {
    dataFine: '',
    dataInizio: '',
    stanza: { id: null },
    user: { id: null },
  };

  successMessage: string | null = null;
  errorMessage: string | null = null;

  constructor(private http: ConnectionDBService, private tokenStorage: TokenStorageService, private router: Router) { }

  ngOnInit(): void {
    this.getDataStart();
    this.getDataEnd();
    this.getAllPrenotazioni();
    this.getAllStanze();

    setTimeout(() => {
      this.getUnavailableDates(this.startDates, this.endDates);
      console.log(this.unavailableDates);
    }, 100);

    if (this.tokenStorage.getToken()) {
      this.prenotazione.user.id = this.tokenStorage.getUser().id;
      console.log(this.user)
    }
  }

  getAllPrenotazioni(): void {
    this.http.getAllPrenotazioni().subscribe(data => {
      this.prenotazioni = data;
    });
  }

  getAllStanze() {
    this.http.getAllStanze().subscribe(data => {
      this.stanze = data;
    });
  }

  getDataStart(): void {
    this.http.getDataStart().subscribe(
      (response: Date[]) => {
        this.startDates = response;
        console.log(this.startDates);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  getDataEnd(): void {
    this.http.getDataEnd().subscribe(
      (response: Date[]) => {
        this.endDates = response;
        console.log(this.endDates);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  getUnavailableDates(startDates: Date[], endDates: Date[]): string[] {
    const dateRange: string[] = [];

    for (let i = 0; i < startDates.length; i++) {
      const startDate = new Date(startDates[i]);
      const endDate = new Date(endDates[i]);

      const currentDate = new Date(startDate);
      while (currentDate <= endDate) {
        const dateString = currentDate.toISOString().substring(0, 10);
        dateRange.push(dateString);
        currentDate.setDate(currentDate.getDate() + 1);
      }
    }

    return this.unavailableDates = dateRange.map(date => {
      const currentDate = new Date(date);
      currentDate.setDate(currentDate.getDate() - 1);

      return currentDate.toISOString().substring(0, 10);
    });

  }

  myFilter = (d: Date | null): boolean => {
    if (d) {
      const currentDate = new Date();
      // Include il giorno corrente
      currentDate.setDate(currentDate.getDate() - 1);
      const selectedDate = new Date(d);
      const dateWithOffset = new Date(selectedDate.getTime() + (selectedDate.getTimezoneOffset() * 60000));

      // Verifica che la data selezionata non sia precedente alla data corrente
      if (dateWithOffset < currentDate) {
        return false;
      }

      const dateString = selectedDate.toISOString().substring(0, 10);
      return !this.unavailableDates.includes(dateString);
    }
    return true;
  };

  selectStartDate(event: any): void {
    const date = new Date(event.value);
    this.startDate = date;
  }

  selectEndDate(event: any): void {
    const date = new Date(event.value);
    this.endDate = date;
  }

  isRangeUnavailable = (start: Date | null, end: Date | null): boolean => {
    if (!start || !end) {
      return false; // Se manca una delle date, considera il range come disponibile
    }

    const startDate = new Date(start);
    const endDate = new Date(end);

    while (startDate < endDate) {
      if (!this.myFilter(startDate)) {
        return true; // Il range contiene una data non disponibile
      }
      startDate.setDate(startDate.getDate() + 1);
    }

    return false; // Tutte le date nel range sono disponibili
  };

  addPrenotazione() {
    this.http.addPrenotazione(this.prenotazione).subscribe(
      (result: any) => {
        this.successMessage = 'Prenotazione aggiunta con successo.';
        setTimeout(() => {
          this.router.navigate(['/Home']);
        }, 1500);
      },
      (error: any) => {
        this.errorMessage = 'Si è verificato un errore durante l\'aggiunta della prenotazione.';
      }
    );
  }

}
