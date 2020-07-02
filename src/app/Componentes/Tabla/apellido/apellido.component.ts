import { Component, OnInit } from '@angular/core';
import { DefaultEditor } from 'ng2-smart-table';

import {FormControl, Validators} from '@angular/forms';



import {ItemAValidar} from '../../../Modelos/item-avalidar';
//***********IMPORTAR VALIDADOR */

import {MyErrorStateMatcher} from '../../Validador/base';

@Component({
  selector: 'app-apellido',
  templateUrl: './apellido.component.html',
  styleUrls: ['./apellido.component.css']
})
export class ApellidoComponent extends DefaultEditor implements OnInit {


  _viejoValor : string;
  apellido: FormControl;

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


    this.apellido = new FormControl(this._viejoValor, [
      Validators.required,
      Validators.minLength(3),

    ]);

    this.generarItem();


  }



  matcher = new MyErrorStateMatcher();


  EnFoco(){



  }


  escribiendo(){

    console.log("dato viejo " + this.cell.getValue() );


    this.generarItem();

  }


  generarItem(){

    let item :ItemAValidar = {
      valido: this.apellido.valid,
      valor: this.apellido.value
    }

    this.cell.newValue = item;


  }



}
