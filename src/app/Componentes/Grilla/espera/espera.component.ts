import { Component, OnInit, Input } from '@angular/core';

//*************************SERVICIOS */

import {CookiesService} from '../../../Servicios/cookies.service';

import {TurnosService} from '../../../Servicios/turnos.service';
import {FireStoreService} from '../../../Servicios/fire-store.service';


//************************** MODELOS */

import {Iturno} from '../../../Modelos/iturno';


@Component({
  selector: 'app-espera',
  templateUrl: './espera.component.html',
  styleUrls: ['./espera.component.css']
})
export class EsperaComponent implements OnInit {


 _tipoUser: string;
 _turnos: Array<Iturno>;
 _turnoActual: Iturno;
 _buscarBase: string='';
 displayedColumns: string[] = ['fecha','nombre','apellido','cod_sala'];

 _tipoPaciente = false;

 _DATASOURCE: Array<Iturno>;






 @Input()
 public set Turnos (obj : Array<Iturno>){


  this._DATASOURCE = obj;

 }


 constructor(private turno: TurnosService, private DB : FireStoreService, private cookes: CookiesService) {



  }



 ngOnInit(): void {



 }




 CargarGrilla(){




 }











}
