import { Component } from '@angular/core';
import { ConnectionDBService } from 'src/app/services/connection-db.service';


@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent {
  unavailableDates: string[] = [];
  startDate: Date | null = null;
  endDate: Date | null = null;

  constructor(private connectionDBService: ConnectionDBService) {}

  ngOnInit(): void {
    this.getUnavailableDates();
  }

  getUnavailableDates(): void {
    this.connectionDBService.getAllPrenotazioniDate().subscribe(
      (response: string[]) => {
        this.unavailableDates = response;
        console.log(this.unavailableDates)
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  myFilter = (d: Date | null): boolean => {
    if (d) {
      const currentDate = new Date();
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

  resetDates(): void {
    this.startDate = null;
    this.endDate = null;
  }

  isRangeUnavailable = (start: Date | null, end: Date | null): boolean => {
    if (!start || !end) {
      return false; // Se manca una delle date, considera il range come disponibile
    }

    const startDate = new Date(start);
    const endDate = new Date(end);

    while (startDate <= endDate) {
      const dateString = startDate.toISOString().substring(0, 10);
      if (this.unavailableDates.includes(dateString)) {
        return true; // Il range contiene una data non disponibile
      }
      startDate.setDate(startDate.getDate() + 1); // Serve per fixare il bug di scalo un giorno
    }

    return false; // Tutte le date nel range sono disponibili
  };


}
