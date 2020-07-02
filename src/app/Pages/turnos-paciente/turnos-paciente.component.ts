import { Component, OnInit } from '@angular/core';

import {FireStoreService} from '../../Servicios/fire-store.service';

import {TurnosService} from '../../Servicios/turnos.service';

import {CookiesService} from '../../Servicios/cookies.service';

//*************************MODELOS */

import { Isesion } from '../../Modelos/isesion';
import {Iturno} from '../../Modelos/iturno';


@Component({
  selector: 'app-turnos-paciente',
  templateUrl: './turnos-paciente.component.html',
  styleUrls: ['./turnos-paciente.component.css']
})
export class TurnosPacienteComponent implements OnInit {


  _DatoSesion: Isesion;


  constructor(public cookies: CookiesService) {



    this.CargarDatosSesion();

  }

  ngOnInit(): void {
  }





  CargarDatosSesion(){

    this._DatoSesion = this.cookies.GetSesionActual();

    console.log("-------ÑIAAA-------");
    console.log(this._DatoSesion);
    console.log("--------ÑIAAA------");
  }




}
