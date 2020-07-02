import { Component, OnInit } from '@angular/core';
import { DefaultEditor } from 'ng2-smart-table';

import {FormControl, Validators} from '@angular/forms';



import {ItemAValidar} from '../../../Modelos/item-avalidar';
//***********IMPORTAR VALIDADOR */

import {MyErrorStateMatcher} from '../../Validador/base';



@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css']
})
export class NameComponent extends DefaultEditor implements OnInit {


  _viejoValor : string;
  nombre: FormControl;

  constructor() { super();

  }

  ngOnInit() {


    if (typeof this.cell.getValue() === 'string') 

    {
      this._viejoValor = this.cell.getValue();

    }else{

      this._viejoValor = "CARGANDO..."
    }

    console.log(this._viejoValor);


    this.nombre = new FormControl(this._viejoValor, [
      Validators.required,
      Validators.minLength(3),

    ]);

    this.generarItem();


  }



  matcher = new MyErrorStateMatcher();


  escribiendo(){

    //console.log("dato viejo " + this.cell.getValue() );


this.generarItem();

  }




  generarItem(){

    let item :ItemAValidar = {
      valido: this.nombre.valid,
      valor: this.nombre.value
    }

    this.cell.newValue = item;


  }



}
