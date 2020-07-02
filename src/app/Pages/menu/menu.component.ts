import { Component, OnInit } from '@angular/core';


import {CookiesService} from '../../Servicios/cookies.service';
import {SesionService} from '../../Servicios/sesion.service';
import { Isesion } from 'src/app/Modelos/isesion';

import { Router } from "@angular/router";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  _sesion= false;
  _logeo : Isesion;
  _paciente= false;
  _especialista= false;
  _recepcionista= false;
  _admin= false;



  constructor(public cookies: CookiesService, private rutas : Router) {


    this.cargarMenu();



  }



  cargarMenu(){

    this._logeo = this.cookies.GetSesionActual();

    if(this._logeo != null){

      this._sesion = true;


    }

  }



  ngOnInit(): void {





  }




  logOut(){

    this._sesion = false;

    this.cookies.BorrarCookies();
  }

}

