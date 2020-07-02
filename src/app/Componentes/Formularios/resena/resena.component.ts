import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormBuilder ,FormGroup, Validators } from '@angular/forms';

//*********************** MODELOS  */

import {Reseña} from '../../../Modelos/reseña';


//************************* SERVICIOS */

import {FireStoreService} from '../../../Servicios/fire-store.service';
import {CookiesService} from '../../../Servicios/cookies.service';

@Component({
  selector: 'app-resena',
  templateUrl: './resena.component.html',
  styleUrls: ['./resena.component.css']
})
export class ResenaComponent implements OnInit {

  formulario: FormGroup;

  _mostrar = false;

  _comentario : string;

  _turnoActual : string;


  @Input()
  public set id (obj : string){

    this._mostrar = true;
    this._turnoActual = obj;



  }



  constructor(private frmbuilder: FormBuilder, private DB: FireStoreService, private cookies: CookiesService)

  {


    this.formulario = this.frmbuilder.group( {

      comentario: ['', [Validators.required, Validators.minLength(30)]],

    });



  }

   get comentario() { return this.formulario.get('comentario'); }


  ngOnInit(): void {
  }

  comentar(){


    /*

  id?: string;
  pacienteAsistio?: Boolean;
  reseña?: string;
  idTurno?: string;

*/


    if(this.formulario.valid){


      let aux : Reseña = {

        pacienteAsistio : true,
        reseña : this._comentario,
        idTurno: this._turnoActual
      }

      this.DB.AltaResena(aux);

      this.DB.UpdateTurno(this._turnoActual,"realizado");

      this.cookies.BorrarTurnoId();

      this._mostrar = false;

    }





  }


  cancelar(){

    this._mostrar = false;

  }




  formatLabel(value: number) {
    if (value >= 1) {
      return Math.round(value);
    }

    return value;
  }



}


