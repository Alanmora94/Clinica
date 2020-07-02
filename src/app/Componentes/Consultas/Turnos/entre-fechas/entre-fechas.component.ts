import { Component, OnInit, Input, Output , EventEmitter} from '@angular/core';


import {TurnosService} from '../../../../Servicios/turnos.service';

//*******************MODELOS  */

import {Iturno} from '../../../../Modelos/iturno';


@Component({
  selector: 'app-entre-fechas',
  templateUrl: './entre-fechas.component.html',
  styleUrls: ['./entre-fechas.component.css']
})
export class EntreFechasComponent implements OnInit {


_desde: Date;
_hasta: Date;

_listado;

_filtrado;

@Output() Fechas = new EventEmitter<any>();

@Input()
public set Lista (obj : Array<Iturno>){


  this._listado = obj;

}



  constructor(private turnos: TurnosService) { }

  ngOnInit(): void {
  }




  filtrar(){

    console.log(this._desde)
    console.log(this._hasta)
    console.log(this._listado)

    this._filtrado = this.turnos.EntreFechas(this._listado,this._desde, this._hasta);

    //console.log(this._filtrado);

    this.emitur();

  }



  emitur(){

    this.Fechas.emit(this._filtrado);
  }


}
