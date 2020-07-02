import { Component, OnInit, Input, Output , EventEmitter} from '@angular/core';


import {TurnosService} from '../../../../Servicios/turnos.service';

import {FireStoreService} from '../../../../Servicios/fire-store.service';

//*******************MODELOS  */

import {Iturno} from '../../../../Modelos/iturno';

import {Iespecialista} from '../../../../Modelos/iespecialista';


@Component({
  selector: 'app-por-especialidad',
  templateUrl: './por-especialidad.component.html',
  styleUrls: ['./por-especialidad.component.css']
})
export class PorEspecialidadComponent implements OnInit {


  _tipo: string;
  _estado: string;

  _listado;

  _listadoFiltrado;


  _especialistas: Array<Iespecialista> = [];


@Output() Especialidad = new EventEmitter<any>();

@Input()
public set Lista (obj : Array<Iturno>){


  this._listado = obj;

}



  constructor(private DB: FireStoreService, private turno: TurnosService) {

    this.DB.GetEspecialista().subscribe(data =>{

      this._especialistas = data;
    })

  }

  ngOnInit(): void {
  }


  filtrar(){


    if(this._estado == null){

      this._estado = 'todos';
    }


    let legajos: Array<number> = [];


    legajos =  this.turno.EspecialistasPorEspecialidad(this._especialistas, this._tipo);






    this._listadoFiltrado = this.turno.PorEspecialistas(this._listado,legajos,this._estado);





    console.log(this._listado);
    console.log(this._tipo);
    console.log(this._estado);


  }


  enviar(){

    this.Especialidad.emit(this._listadoFiltrado);

  }



}
