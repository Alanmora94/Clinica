import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


//**************SERVICIOS */
import { Router } from "@angular/router";

import {FireStoreService} from './fire-store.service';

import {TokenService} from './token.service';

//***************MODELOS */

import {Iturno} from '../Modelos/iturno';

import {Isesion} from '../Modelos/isesion';
import {Usuario} from '../Modelos/usuario';
import { IPaciente } from '../Modelos/ipaciente';
import { Irecepcionista } from '../Modelos/irecepcionista';
import { Iespecialista } from '../Modelos/iespecialista';



@Injectable({
  providedIn: 'root'
})
export class CookiesService {


  public userActual : Usuario;



 public _sesionActual: Isesion;

  constructor(private db: FireStoreService, private token : TokenService, private rutas: Router) {


    this.regenerar();

   }



  SetSesion (obj : Isesion){

      this._sesionActual = obj;
  }



GetSesionActual(): Isesion{



    let aux: Isesion = JSON.parse(localStorage.getItem("Usuario"));

    if(aux != null){

      this._sesionActual = aux;
    }


  return this._sesionActual;

}


regenerar(){

   let aux: Usuario = JSON.parse(localStorage.getItem("Usuario"));

  if(aux != null){

    this.GuardarUsuario(aux);
  }



}





GuardarTurnoID(obj: string){


  localStorage.setItem("turnoid", obj);


}



GetTurnoId(): string {

  let aux: string = localStorage.getItem("turnoid");

  return aux

}


BorrarTurnoId() {

  localStorage.removeItem("turnoid");



}





GuardarUsuario(obj: Usuario){


  localStorage.setItem("Usuario", JSON.stringify(obj));


}


GuardarTurno(obj: Iturno){


  localStorage.setItem("Turno", JSON.stringify(obj));


}




GetTurno(): Iturno{


  let aux: Iturno = JSON.parse(localStorage.getItem("Turno"));


  return aux;

}




BorrarCookies(){

  localStorage.removeItem("Turno");
  localStorage.removeItem("Usuario");
  localStorage.removeItem("UserName");

  this.token.BorrarToken();

  this._sesionActual = null;

  this.rutas.navigateByUrl("LogIn");

}



GuardarUsuarioCook(obj: Isesion){


  localStorage.setItem("Usuario", JSON.stringify(obj));

}





}
