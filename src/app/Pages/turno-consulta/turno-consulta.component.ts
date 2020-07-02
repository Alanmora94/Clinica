import { Component, OnInit } from '@angular/core';

import {FireStoreService} from '../../Servicios/fire-store.service';

import {TurnosService} from '../../Servicios/turnos.service';

//*************************MODELOS */

import {Iturno} from '../../Modelos/iturno';
import {ExportI} from '../../Modelos/export-i';


@Component({
  selector: 'app-turno-consulta',
  templateUrl: './turno-consulta.component.html',
  styleUrls: ['./turno-consulta.component.css']
})
export class TurnoConsultaComponent implements OnInit {


  _listaexport: Array<ExportI>=[];
  _cabeceras: string[] = ['Paciente DNI','nombre','apellido','Legajo del especialista','sala','estado'];

  constructor(private DB : FireStoreService, private turno: TurnosService) {

    this.DB.GetTurno().subscribe(data =>{

      this._listado = data;
    })

  }


  _listado: Array<Iturno>;
  _listadoFiltrado: Array<Iturno>;


  ngOnInit(): void {
  }




  recibirFechas(e){


  this._listadoFiltrado = e;

    this.GenerarExport();
  }


  recibirPorEspecialista(e){


    this._listadoFiltrado = e;
    this.GenerarExport();

  }




  GenerarExport(){


    this._listaexport = this.turno.GenerarListaExpor(this._listadoFiltrado,'Paciente_DNI','nombre','apellido','EspecialistaLegajo','cod_sala','estado')
  }



}

