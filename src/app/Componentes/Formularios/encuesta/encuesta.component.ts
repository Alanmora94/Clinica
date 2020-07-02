import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormBuilder ,FormGroup, Validators } from '@angular/forms';

//*********************** MODELOS  */

import {IEncuesta} from '../../../Modelos/iencuesta';
import {Iturno} from '../../../Modelos/iturno';


//************************* SERVICIOS */

import {FireStoreService} from '../../../Servicios/fire-store.service';
import {CookiesService} from '../../../Servicios/cookies.service';


@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.css']
})
export class EncuestaComponent implements OnInit {

  formulario: FormGroup;

  _mostrar = false;

  _comentario : string;
  _clinica : number;
  _especialista : number;
  _turnoActual : Iturno;


  @Input()
  public set Turno (obj : Iturno){

    this._mostrar = true;
    this._turnoActual = obj;



  }



  constructor(private frmbuilder: FormBuilder, private DB: FireStoreService, private cookies: CookiesService)

  {


    this.formulario = this.frmbuilder.group( {

      comentario: ['', [Validators.required, Validators.minLength(66)]],
      clinica: ['', [Validators.required,]],
      especialista: ['', [Validators.required,]],

    });


   //this._turnoActual = this.cookies.GetTurno();


  }

   get comentario() { return this.formulario.get('comentario'); }
   get clinica() { return this.formulario.get('clinica'); }
   get especialista() { return this.formulario.get('especialista'); }







  ngOnInit(): void {
  }

  comentar(){


    console.log(this._clinica);
    console.log(this._especialista);
    console.log(this._comentario);


    if(this.formulario.valid){


      let aux : IEncuesta = {

        clinica : this._clinica,
        especialista : this._especialista,
        comentario: this._comentario,
        idTurno : this._turnoActual.id
      }

      this.DB.AltaEncuesta(aux);

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
