import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder ,FormGroup, Validators } from '@angular/forms';

//*********************** MODELOS  */

import { Usuario } from '../../../../Modelos/usuario';

//*********************SERVICIOS */

import {SesionService} from '../../../../Servicios/sesion.service';
import {CookiesService} from '../../../../Servicios/cookies.service';


@Component({
  selector: 'app-log-inForm',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  formulario: FormGroup;
  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  _email : string;
  _pass : string;




  constructor(private cookies: CookiesService, private sesion: SesionService , private frmbuilder: FormBuilder)

  {


    this.formulario = this.frmbuilder.group( {

      pass: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]]});


  }

   get pass() { return this.formulario.get('pass'); }
   get email() { return this.formulario.get('email'); }






  ngOnInit(): void {
  }

  IniciarS(){

    if(this.formulario.valid){

     this.sesion.IniciarSesion(new Usuario(this._email,this._pass));
    }


  }



//*********************************CARGAR LOS ESTABLECIMIENTOS */




//*******************************CARGAR DATOS */


CargarDatos(){

  this._email = 'alanmora@yahoo.com';
  this._pass = 'Umbrella12';
}



/***************************RECIBIR DATOS */





}
