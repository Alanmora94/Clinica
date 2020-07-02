import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';

//*************************SERVICIOS */

import {CookiesService} from '../../../Servicios/cookies.service';

import {TurnosService} from '../../../Servicios/turnos.service';
import {FireStoreService} from '../../../Servicios/fire-store.service';


//************************** MODELOS */
import { Isesion } from '../../../Modelos/isesion';
import {Iturno} from '../../../Modelos/iturno';
import { Reseña } from 'src/app/Modelos/reseña';
import { IEncuesta } from 'src/app/Modelos/iencuesta';



@Component({
  selector: 'app-mis-turnos',
  templateUrl: './mis-turnos.component.html',
  styleUrls: ['./mis-turnos.component.css']
})
export class MisTurnosComponent implements OnInit {


 _tipoUser: string;
  _turnos: Array<Iturno>;
  _turnoActual: Iturno;
  _buscarBase: string='';
  displayedColumns: string[] = ['fecha','Paciente_DNI','EspecialistaLegajo','cod_sala','estado','Accion'];

  _tipoPaciente = false;

  _DATASOURCE: Array<Iturno>;


  _dni: number;


  _resenaBol= false;
  _resena: string;

  _tieneComentario = true;

  @Input()
  public set DNI (obj : Isesion){

    console.log("entra en input");
    console.log(obj);

    this._dni = Number(obj.dniLegajo);
    this._tipoUser = obj.tipo


  }


  constructor(private turno: TurnosService, private DB : FireStoreService, private cookes: CookiesService) {




    this.DB.GetTurno().subscribe(data => {


      this._turnos = data;


      if(this._tipoUser == 'Paciente')
      {
        this._tipoPaciente = true;
      }

      this.CargarGrilla();


    })


   }






  ngOnInit(): void {
  }

  CargarGrilla(){



    let auxi : Array<Iturno> = [];


      console.log(this._turnos);
      console.log(this._dni);

    if (this.cookes.GetSesionActual().tipo == 'Paciente'){

      this._DATASOURCE = this.turno.GetTurnoPorPaciente(this._turnos, this._dni);

    }else{

      this._DATASOURCE = this._turnos;

      this._tipoPaciente = false;
    }

  }




  Cancelar(e){

    console.log(e);

    this.DB.UpdateTurno(e, "cancelado");

  }




  encuesta(e){


    this._turnoActual = e;

    this._resenaBol = false;

    this._resena = null;

  }



  VerResena(e: Iturno){

    let resena : Array<Reseña>;

    this.DB.GetResena().subscribe(data =>{


      resena = data;

        for (let index = 0; index < resena.length; index++) {
          const element = resena[index];

            if(element.idTurno == e.id){

                this._resena = element.reseña;
                this._resenaBol = true;

            }


        }



    })



  }



  ValidarComentario(e: Iturno){

    let encuenta : Array<IEncuesta>;

    this.DB.GetEncuesta().subscribe(data =>{

      this._tieneComentario = true;

      encuenta = data;

      //let respuesta = true;

        for (let index = 0; index < encuenta.length; index++) {
          const element = encuenta[index];

            if(element.idTurno == e.id){

              this._tieneComentario = false;

            }

        }



    })



  }




}
