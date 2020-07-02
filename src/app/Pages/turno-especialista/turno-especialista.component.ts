import { Component, OnInit } from '@angular/core';

import {CookiesService} from '../../Servicios/cookies.service';

//*******************MODELOS */

import { Isesion } from '../../Modelos/isesion';



@Component({
  selector: 'app-turno-especialista',
  templateUrl: './turno-especialista.component.html',
  styleUrls: ['./turno-especialista.component.css']
})
export class TurnoEspecialistaComponent implements OnInit {


  _DatoSesion: Isesion;


  constructor(public cookies: CookiesService) {


    this.CargarDatosSesion();
  }

  ngOnInit(): void {
  }





  CargarDatosSesion(){

    this._DatoSesion = this.cookies.GetSesionActual();


  }




}
