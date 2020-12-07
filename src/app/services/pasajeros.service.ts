import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Pasajero } from '../models/Pasajero';

@Injectable({
  providedIn: 'root'
})
export class PasajerosService {

  API_URI = 'http://localhost:8080/Pasajeros/V1'

  constructor(private http: HttpClient) { 

  }

  getPasajeros() {
    return this.http.get(`${this.API_URI}/findAll`);
  }

  getPasajero(identificacion: string) {
    return this.http.get(`${this.API_URI}/getByIdentificacion/${identificacion}`);
  }

  getPasajeroById(id: number) {
    return this.http.get(`${this.API_URI}/getById/${id}`);
  }

  deletePasajero(id: number) {
    return this.http.delete(`${this.API_URI}/id/${id}`);
  }

  savePasajero(pasajero: Pasajero) {
    return this.http.post(`${this.API_URI}/`, pasajero);
  }

  updatePasajero(id, updatedPasajero) {
    return this.http.put(`${this.API_URI}/id/${id}`, updatedPasajero);
  }

  

}
