import { Component, OnInit } from '@angular/core';
import { DefaultEditor } from 'ng2-smart-table';

import {FormControl, Validators} from '@angular/forms';



import {ItemAValidar} from '../../../Modelos/item-avalidar';
//***********IMPORTAR VALIDADOR */

import {MyErrorStateMatcher} from '../../Validador/base';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent extends DefaultEditor implements OnInit {

  _viejoValor : string;
  email: FormControl;

  constructor() { super();

  }

  ngOnInit() {

    if (typeof this.cell.getValue() === 'string')

    {
      this._viejoValor = this.cell.getValue();

    }else{

      this._viejoValor = "CARGANDO..."
    }




    this.email = new FormControl(this._viejoValor, [
      Validators.required,
      Validators.email,
    ]);

    this.generarItem();



  }



  matcher = new MyErrorStateMatcher();

  escribiendo(){


  this.generarItem();


  }



  generarItem(){

    let item :ItemAValidar = {
      valido: this.email.valid,
      valor: this.email.value
    }

    this.cell.newValue = item;


  }



}
