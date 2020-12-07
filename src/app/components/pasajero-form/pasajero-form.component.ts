import { Component, OnInit } from '@angular/core';
import { PasajerosService } from 'src/app/services/pasajeros.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pasajero-form',
  templateUrl: './pasajero-form.component.html',
  styleUrls: ['./pasajero-form.component.css']
})
export class PasajeroFormComponent implements OnInit {

  pasajero: any = {

    id: 0,
    idVuelo: 0,
    nombres: "",
    apellidos: "",
    genero: "",
    tipoIdentificacion: "",
    identificacion: "",
    celular: "",
    email: ""
  };

  edit: boolean = false;

  constructor(private pasajerosService: PasajerosService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.pasajerosService.getPasajero(params.id)
      .subscribe(
        res => {
          console.log(res);
          this.pasajero = res;
          this.edit = true;
        },
        err => console.error(err)
      )
    }
  }

  saveNewPasajero() {
    this.pasajerosService.savePasajero(this.pasajero)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/pasajeros']);
      },
      err => console.error(err)
    )
  }

  updatePasajero() {
    this.pasajerosService.updatePasajero(this.pasajero.id, this.pasajero)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/pasajeros']);
      },
      err => console.error(err)
    )
  }

}
