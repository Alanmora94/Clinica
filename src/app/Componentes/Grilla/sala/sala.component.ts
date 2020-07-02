import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';

import { timer } from 'rxjs';

//*************************SERVICIOS */

import {CookiesService} from '../../../Servicios/cookies.service';

import {TurnosService} from '../../../Servicios/turnos.service';
import {FireStoreService} from '../../../Servicios/fire-store.service';


//************************** MODELOS */
import { Isesion } from '../../../Modelos/isesion';
import {Iturno} from '../../../Modelos/iturno';
import { Isala } from 'src/app/Modelos/isala';




@Component({
  selector: 'app-sala',
  templateUrl: './sala.component.html',
  styleUrls: ['./sala.component.css']
})
export class SalaComponent implements OnInit {

  _salas: Array<Isala>;

_turnos: Array<Iturno>;

_proximos: Array<Iturno> = [];

_atendidos: Array<Iturno> = [];

  @Input()
  public set Turnos (obj : Array<Iturno>){

    this._turnos = obj;



  }

  @Input()
  public set Salas (obj : Array<Isala>){

    this._salas = obj;



  }


  constructor(private turno: TurnosService, private DB : FireStoreService) {




  }

  ngOnInit(): void {

    this.CargarProximos();

  }




  CargarProximos(){



    this._proximos = this.turno.GetProximosTurnos(this._salas, this._turnos);

    this._atendidos = this.turno.GetTurnosTomados(this._turnos);




  }

}
