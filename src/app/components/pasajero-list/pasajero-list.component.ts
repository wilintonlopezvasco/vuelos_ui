import { Component, OnInit } from '@angular/core';

import { PasajerosService } from '../../services/pasajeros.service';

@Component({
  selector: 'app-pasajero-list',
  templateUrl: './pasajero-list.component.html',
  styleUrls: ['./pasajero-list.component.css']
})
export class PasajeroListComponent implements OnInit {

  pasajeros: any = [];

  constructor(private pasajerosServices: PasajerosService) { }

  ngOnInit(): void {
    this.getGames();
  }

  getGames() {
    this.pasajerosServices.getPasajeros()
    .subscribe(
      res => {
        this.pasajeros = res;
      },
      err => console.error(err)
    )
  }

  deletePasajero(id: number) {
    this.pasajerosServices.deletePasajero(id)
    .subscribe(
      res => {
        console.log(res)
      },
      err => console.error(err)
    )
  }

  

}
