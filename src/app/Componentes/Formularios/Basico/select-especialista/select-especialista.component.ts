import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

//***************MODELOS */

import {Iespecialista} from '../../../../Modelos/iespecialista';

//***************SERVICIOS */

import {FireStoreService} from '../../../../Servicios/fire-store.service';


@Component({
  selector: 'app-select-especialista',
  templateUrl: './select-especialista.component.html',
  styleUrls: ['./select-especialista.component.css']
})
export class SelectEspecialistaComponent implements OnInit {


_listaEspecialistas: Array<Iespecialista> = [];

_elegido: number;

  @Output() Elegido = new EventEmitter<any>();


  constructor(private DB: FireStoreService) {

      this.DB.GetEspecialista().subscribe(data =>{

          this._listaEspecialistas = data;
      });


  }

  ngOnInit(): void {
  }



  enviar(){




    this.Elegido.emit(this._listaEspecialistas[this._elegido]);


  }

}
