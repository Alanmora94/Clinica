import { Component, OnInit } from '@angular/core';
import { DefaultEditor } from 'ng2-smart-table';

import {FormControl, Validators} from '@angular/forms';



import {ItemAValidar} from '../../../Modelos/item-avalidar';
//***********IMPORTAR VALIDADOR */

import {MyErrorStateMatcher} from '../../Validador/base';

@Component({
  selector: 'app-img-editor',
  templateUrl: './img-editor.component.html',
  styleUrls: ['./img-editor.component.css']
})
export class ImgEditorComponent extends DefaultEditor implements OnInit {

  _viejoValor : string;
  preimagen = "";

  constructor() { super();

  }

  ngOnInit() {


    this._viejoValor = this.cell.getValue();

    console.log(this._viejoValor);


  }






 // matcher = new MyErrorStateMatcher();



  handleImage(e: any):void{

    this.preimagen = e.target.files[0];

    this.cell.newValue = this.preimagen;



  }


}
