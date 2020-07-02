import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import {FireStoreService} from '../../../../Servicios/fire-store.service'

import {TurnosService} from '../../../../Servicios/turnos.service';

import {Iturno} from '../../../../Modelos/iturno';

import {Isala} from '../../../../Modelos/isala';

import {SalaFecha} from '../../../../Modelos/sala-fecha';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-select-fecha',
  templateUrl: './select-fecha.component.html',
  styleUrls: ['./select-fecha.component.css']
})
export class SelectFechaComponent implements OnInit {

  minDate: Date;
  maxDate: Date;

  _TurnosTodos : Array<Iturno>;
  _dia: Date;
  _horarios: Array<Date> = [];
  _FechaElegida: number;

  _fechaNoDisponible: Array<Date> = [];

  _especialista: number;

  _salas: Array<Isala>;

  _disponibles: Array<SalaFecha>=[];

  //_disponibles: Array<Date>=[];

  _horarioDisponible = false;


  @Output() Elegido = new EventEmitter<any>();


  @Input()
  public set Especialista (obj : number){


    this._especialista = obj;

    this.filtrarTurnos();

  }






  constructor(private DB: FireStoreService, private turno: TurnosService) {

    const currentYear = new Date().getFullYear();
    this.minDate = new Date();
    this.maxDate = new Date(currentYear + 1, 11, 31);

    this.ObtenerSalas();

  }

  ngOnInit(): void {
  }

  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    const diaM = (d || new Date()).getDate();
    const mes = (d || new Date()).getMonth();
    // Prevent Saturday and Sunday from being selected.
    let respuesta: boolean = false;

      if (day !== 0 && day !== 6){

        respuesta = true;


          if(this._fechaNoDisponible.length > 0){

              for (let index = 0; index < this._fechaNoDisponible.length; index++) {
                const element : Date = this._fechaNoDisponible[index];
                let contador = 0;


                if(element.getDate() == diaM && element.getMonth() ==  mes){

                  respuesta = false;

                }

              }

            }





      }


    return respuesta;
  }




  activarHora(){


    this._horarios = this.turno.ObtenerHorarioDisponibleXEspecialistaYFecha(this._dia,this._especialista,this._TurnosTodos);


    this._disponibles = this.turno.ObtenerHorarioDisponibleXSala(this._salas,this._TurnosTodos,this._horarios);


    console.log("FECHAS CONSEGUIDAS")
    console.log(this._disponibles)

    if (this._disponibles == null || this._disponibles.length < 1){

        this._horarioDisponible = false;

    }else{ this._horarioDisponible = true;


    }




  }



  Cargar(){

    console.log(this._disponibles[this._FechaElegida]);
    this.Elegido.emit(this._disponibles[this._FechaElegida]);




  }





filtrarTurnos(){

let aux : Array<Iturno>;

  this.DB.GetTurno().subscribe(data =>{

    this._TurnosTodos = data;


    this._fechaNoDisponible = this.turno.ObtenerFechaNoDisponiblesXEspecialista(this._TurnosTodos,this._especialista);


    console.log(this._fechaNoDisponible);


  })


}



ObtenerSalas(){

    this.DB.GetSalas().subscribe(data =>{

      this._salas = data;

    })


  }













}
