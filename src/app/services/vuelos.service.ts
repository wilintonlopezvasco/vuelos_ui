import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VuelosService {

  API_URI = 'http://localhost:8080/Vuelos/V1'

  constructor(private http: HttpClient) {
    
   }

   getVuelos() {
     return this.http.get(`${this.API_URI}/findAll`);
   }
}
