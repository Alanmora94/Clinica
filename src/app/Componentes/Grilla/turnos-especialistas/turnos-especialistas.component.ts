import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';

//*************************SERVICIOS */

import {CookiesService} from '../../../Servicios/cookies.service';

import {TurnosService} from '../../../Servicios/turnos.service';
import {FireStoreService} from '../../../Servicios/fire-store.service';


//************************** MODELOS */
import { Isesion } from '../../../Modelos/isesion';
import {Iturno} from '../../../Modelos/iturno';



//************************COMPLEMENTOS DE LA TABLA  */

import {FechaComponent} from '../../Grilla/Comple/fecha/fecha.component';
import {CancelarFinalizarComponent} from '../../Grilla/Comple/cancelar-finalizar/cancelar-finalizar.component';



@Component({
  selector: 'app-turnos-especialistasListado',
  templateUrl: './turnos-especialistas.component.html',
  styleUrls: ['./turnos-especialistas.component.css']
})
export class TurnosEspecialistasComponent implements OnInit {



  _DatoSesion: number;
  _tipoUser: string;
  _turnos: Array<Iturno>;

  _filtrados: Array<Iturno>;


  @Input()
  public set Legajo (obj : Isesion){

    this._DatoSesion = obj.dniLegajo;
    this._tipoUser = obj.tipo;


  }


  constructor(private turno: TurnosService, private DB : FireStoreService, public cookies: CookiesService) {


    this.DB.GetTurno().subscribe(data => {


      this._turnos = data;
      this.CargarGrilla();


    })


   }





  ngOnInit(): void {
  }


  settings = {

    delete: {
      confirmDelete : false
    },
    edit: {
      confirmSave: false

    },

    actions: {
      add: false,
      edit: false,
      delete: false
    },
    columns: {

      fecha: {
        title: 'Fecha',
        filter: true,
        type: 'custom',
        renderComponent: FechaComponent
      },
      Paciente_DNI: {
        title: 'DNI',
        filter: false,
      },
      nombre: {
        title: 'Nombre',
        filter: false,
      },
      apellido: {
        title: 'Apellido',
        filter: false,
      },
      estado: {
        title: 'Estado',
        filter: false,
      },
      id: {
        title: 'Accion',
        filter: false,
        type: 'custom',
        renderComponent: CancelarFinalizarComponent
      }
    }
  };




  CargarGrilla(){



    let auxi : Array<Iturno> = [];



      this._filtrados = this.turno.PorUnEspecialista(this._turnos, this._DatoSesion);




  }





}
