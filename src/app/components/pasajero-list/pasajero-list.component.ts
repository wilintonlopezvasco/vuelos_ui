import { Component, OnInit, PipeTransform, Pipe } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PasajerosService } from '../../services/pasajeros.service';

@Component({
  selector: 'app-pasajero-list',
  templateUrl: './pasajero-list.component.html',
  styleUrls: ['./pasajero-list.component.css']
})
export class PasajeroListComponent implements OnInit {
  pasajeros: any = [];
  idVuelo: string;

  constructor(private pasajerosServices: PasajerosService, private _Activatedroute: ActivatedRoute) { }

  ngOnInit(): void {
    this.idVuelo=this._Activatedroute.snapshot.paramMap.get("idVuelo");
    this.getPasajeros();
  }

  getPasajeros() {
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

@Pipe({
  name: 'pasajeroFilter',
  pure: false
})
export class PasajeroFilter implements PipeTransform {
  pasajeros: any = [];
  transform(items: any[], filter: object, key: string): any {
    return filter ? items.filter(item => item[key] == filter) : items;
  }
}