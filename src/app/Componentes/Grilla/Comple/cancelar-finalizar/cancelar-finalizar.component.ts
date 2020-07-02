import { Component, OnInit, Input } from '@angular/core';

import {CookiesService} from '../../../../Servicios/cookies.service';

import {FireStoreService} from '../../../../Servicios/fire-store.service';


import {Reseña} from '../../../../Modelos/reseña';


@Component({
  selector: 'app-cancelar-finalizar',
  templateUrl: './cancelar-finalizar.component.html',
  styleUrls: ['./cancelar-finalizar.component.css']
})
export class CancelarFinalizarComponent implements OnInit {

  constructor(private cookies: CookiesService, private DB: FireStoreService) { }

  @Input() value: string;

  ngOnInit(): void {
  }




  finalizar(){



      this.cookies.GuardarTurnoID(this.value);

    }

  cancelar(){


    let aux : Reseña = {

      pacienteAsistio : false,
      reseña : "El paciente no ha asistido",
      idTurno: this.value
    }

    this.DB.AltaResena(aux);

    this.DB.UpdateTurno(this.value,"cancelado");



}




tomar(){

  this.DB.UpdateTurno(this.value,"tomado");


}




}
