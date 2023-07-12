import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConnectionDBService {

  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getAllPrenotazioni(): Observable<any> {
    return this.http.get(`${this.baseUrl}/prenotazioni/all`);
  }

  getAllStanze(): Observable<any> {
    return this.http.get(`${this.baseUrl}/stanze/all`);
  }

  getDataStart(): Observable<any> {
    return this.http.get(`${this.baseUrl}/prenotazioni/date-inizio`);
  }

  getDataEnd(): Observable<any> {
    return this.http.get(`${this.baseUrl}/prenotazioni/date-fine`);
  }

  addPrenotazione(prenotazione: any):Observable<any> {
    return this.http.post(`${this.baseUrl}/prenotazioni/add`, prenotazione);
  }

  modificaPrenotazione(id:number, prenotazione: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/prenotazioni/update/${id}`, prenotazione);
  }

  deletePrenotazione(id: number){
    return this.http.delete<any>(`${this.baseUrl}/prenotazioni/delete/${id}`).pipe(
      tap(response => {
        console.log(response.message);
      })
    );
  }

}
