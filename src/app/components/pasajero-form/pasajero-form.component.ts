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
      this.pasajerosService.getPasajeroById(params.id)
        .subscribe(
          (res: any) => {
            console.log(res);
            this.pasajero = res.data;
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
    const params = this.activatedRoute.snapshot.params;
    this.pasajerosService.updatePasajero(params.id, this.pasajero)
    .subscribe(
      res => {
        console.log(res);
      },
      err => console.log(err)
      
    )
    
  }

  searchPasajero(identificacion: string) {
    this.pasajerosService.getPasajero(identificacion)
      .subscribe(
        (res: any) => {
          console.log(res.data)
          this.router.navigate([`/pasajeros/edit`, res.data.id]);
        },
        err => console.error(err)
      )
  }
}