import { Component, OnInit } from '@angular/core';


/*****************SERVICIOS */

import {TurnosService} from '../../Servicios/turnos.service';
import {FireStoreService} from '../../Servicios/fire-store.service';


/********************MODELOS */

import {Iturno} from '../../Modelos/iturno';

import {Isala} from '../../Modelos/isala';



@Component({
  selector: 'app-sala-espera',
  templateUrl: './sala-espera.component.html',
  styleUrls: ['./sala-espera.component.css']
})
export class SalaEsperaComponent implements OnInit {

_salas: Array<Isala>;

_turnosHoy: Array<Iturno>;

  constructor(private turno : TurnosService, private DB: FireStoreService) {

    this.DB.GetTurno().subscribe(date =>{


       this._turnosHoy = this.turno.GetTurnosHoy(date);

       //console.log(this._turnosHoy);

    })


    this.DB.GetSalas().subscribe(data =>{

        this._salas = data;
    })


  }

  ngOnInit(): void {
  }

}
