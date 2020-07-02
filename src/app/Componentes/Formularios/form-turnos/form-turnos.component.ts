import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Router } from "@angular/router";
//********************MODELOS  */
import {SalaFecha} from '../../../Modelos/sala-fecha';

import { Paciente } from '../../../Modelos/paciente';
import { Iespecialista } from '../../../Modelos/iespecialista';
import { Irecepcionista } from '../../../Modelos/irecepcionista';
import { Isesion } from '../../../Modelos/isesion';
import { Iturno } from '../../../Modelos/iturno';
//import { Usuario } from '../../../../Modelos/usuario';



import {SesionService} from '../../../Servicios/sesion.service';

import {CookiesService} from '../../../Servicios/cookies.service';
//import {BdService} from '../../../../Servicios/bd.service';

import {FireStoreService} from '../../../Servicios/fire-store.service';

import { FormControl, FormBuilder ,FormGroup, Validators } from '@angular/forms';


//import {NotificacionService} from '../../../Servicios/notificacion.service';


@Component({
  selector: 'app-form-turnos',
  templateUrl: './form-turnos.component.html',
  styleUrls: ['./form-turnos.component.css']
})
export class FormTurnosComponent implements OnInit {


  _fecha: SalaFecha;
  _especialista: Iespecialista;
  _paciente: Paciente;
  _titulo: string;
  _GUI: string;
  _DatoSesion: Isesion;


  @Input()
  public set Titulo (obj : string){


    this._titulo = obj;



  }

  @Input()
  public set Tipo (obj : string){


    this._GUI = obj;



  }

  formulario: FormGroup;

  public contactForm: FormGroup;

  _nombre:string;
  _apellido:string;
  _dni:number;

  constructor(private sesion: SesionService, private frmbuilder: FormBuilder, private BD: FireStoreService, private cookies: CookiesService,
               private ruta: Router) {

    this.formulario = this.frmbuilder.group( {

      nombre: ['', [Validators.required, Validators.minLength(4)]],
      apellido: ['', [Validators.required, Validators.minLength(4)]],
      dni: ['', [Validators.required]]
     });


     this.CargarDatosSesion();


   }


   get surname() { return this.formulario.get('apellido'); }
   get dni() { return this.formulario.get('dni'); }
   get name() { return this.formulario.get('nombre'); }

   Registrar(){








                      let _turno :Iturno = {

                        nombre: this._DatoSesion.nombre,
                        apellido: this._DatoSesion.apellido,
                        Paciente_DNI: this._dni,
                        TipoCreador: this._DatoSesion.tipo,
                        EspecialistaLegajo: this._especialista.legajo,
                        CreadorId: this._DatoSesion.dniLegajo,
                        fecha: this._fecha.fecha,
                        id_sala: this._fecha.idSala,
                        cod_sala: this._fecha.salaCod,
                        estado: "pendiente"
                      }

                      console.log(_turno);

                      this.BD.AltaTurnos(_turno);

                     // this.notificar.Turno(_turno.cod_sala);
                      this.ruta.navigateByUrl("Home");




  }



  ngOnInit(): void {



  }





  validacion(){

  }


  CargarDatosSesion(){

    this._DatoSesion = this.cookies.GetSesionActual();

    console.log("--------------");
    console.log(this._DatoSesion);
    console.log("--------------");
  }





  carga(){

    if(this._DatoSesion != null){



    this._apellido = this._DatoSesion.apellido;
    this._nombre = this._DatoSesion.nombre;
    this._dni = this._DatoSesion.dniLegajo;

    }else{

      console.log("LAAA");

      this.CargarDatosSesion();
    }



  }


  recibir(e){

    this._especialista= null;

    this._especialista=e;
  }


  recibirFecha(e){

console.log(e);

    this._fecha=e;
  }

}
