import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produit } from './Models/produit';
import { Ventilateur } from './Models/ventilateur';
import { Brumisateur } from './Models/brumisateur';
import { Climatiseur } from './Models/climatiseur';
import { ClimatiseurEcolo } from './Models/climatiseurEcolo';
import { Eventail } from './Models/eventail';

@Injectable({
  providedIn: 'root'
})
export class DataAccessService {

  private apiUrl: string = 'http://localhost:3333';
  private apiKey: string = '123';
  constructor(private http: HttpClient) {}
  getVentilateurs(): Observable<Produit[]> {
    return this.http.get<Ventilateur[]>(`${this.apiUrl}/Ventilateur?apiKey=${this.apiKey}`);
  }
  getBrumisateurs(): Observable<Produit[]> {
    return this.http.get<Brumisateur[]>(`${this.apiUrl}/Brumisateur?apiKey=${this.apiKey}`);
  }
  getClimatiseurs(): Observable<Produit[]> {
    return this.http.get<Climatiseur[]>(`${this.apiUrl}/Climatiseur?apiKey=${this.apiKey}`);
  }
  getClimatiseursEcolo(): Observable<Produit[]> {
    return this.http.get<ClimatiseurEcolo[]>(`${this.apiUrl}/ClimatiseurEcolo?apiKey=${this.apiKey}`);
  }
  getEventail(): Observable<Produit[]> {
    return this.http.get<Eventail[]>(`${this.apiUrl}/Eventail?apiKey=${this.apiKey}`);
  }
  getDetail(id:number): Observable<Produit> {
    return this.http.get<Produit>(`${this.apiUrl}/Detail/${id}&apiKey=${this.apiKey}`);
  }


}
