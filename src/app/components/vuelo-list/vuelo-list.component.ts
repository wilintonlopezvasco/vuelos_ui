import { Component, OnInit } from '@angular/core';

import { VuelosService } from '../../services/vuelos.service';

@Component({
  selector: 'app-vuelo-list',
  templateUrl: './vuelo-list.component.html',
  styleUrls: ['./vuelo-list.component.css']
})
export class VueloListComponent implements OnInit {

  vuelos: any = [];

  constructor(private vuelosServices: VuelosService) { }

  ngOnInit(): void {
    this.vuelosServices.getVuelos()
    .subscribe(
      res => {
        this.vuelos = res;
      },
      err => console.error(err)
    );
  }

}
